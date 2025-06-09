"use client"
import { createContext, FC, ReactNode, useContext, useEffect, useRef, useState } from 'react'
import HeadingEighthXl from '../utilities/headings/HeadingEighthXl';
import { motion, AnimatePresence } from "framer-motion"

interface Props{
    children?: ReactNode
}
type LoadingProviderValue = {
    isLoaded: boolean,
    registerLoadingEvent: RegisterLoadingEvent
} | null;
export type loadingEventTypes = "loaded" | "loaderOut" | "loadstart"
export type EventsStateType = Record<loadingEventTypes,(Event | undefined)>;

export type RegisterLoadingEventParams = {eventType: loadingEventTypes, callback: () => void}
export type RegisterLoadingEvent = (params: RegisterLoadingEventParams) => (() => void);

const loadingContext = createContext<LoadingProviderValue>(null);
const eventNames: loadingEventTypes[] = ["loaded","loaderOut","loadstart"];
const BlankLoadingContextProvider: FC<Props> = ({children}) => {

    const [isLoaded,setIsLoaded] = useState<boolean>(false);
    const loadedListRef = useRef<boolean[]>([]);
   

    const [events, setEvents] = useState<EventsStateType>({
        loaded: undefined,
        loaderOut: undefined,
        loadstart: undefined
    });
    const disableScrolling = () => {
        document.body.style.overflowY = "clip";
        document.body.style.overflowX = "clip";
    }
    const enableScrolling = () => {
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "clip";
    }
    useEffect(() => {
       const eventMap: EventsStateType = {
            loaded: undefined,
            loaderOut: undefined,
            loadstart: undefined
        };
        eventNames.forEach((eventName) => {
            const event = new Event(eventName,{bubbles: true,cancelable: false});
            eventMap[eventName] = event
        });
        setEvents({...eventMap});
    },[]);

    const onAllLoaded = () => {
        if(!isLoaded){
        const isAllLoaded = loadedListRef.current.every(loaded => loaded);
                        
            if(isAllLoaded){
                setIsLoaded(true);
                if(events.loaded){
                    document.dispatchEvent(events.loaded);
                }
                
            }
        }
 
    }
    useEffect(() => {

        const videoElements = document.querySelectorAll("video[autoPlay='']") as NodeListOf<HTMLVideoElement>;

        if(videoElements.length === 0){
            setIsLoaded(true);
            return
        }

        const videos: HTMLVideoElement[] = [];
 
        videoElements.forEach((video) => {
            videos.push(video)
        });


        for(const [index, video] of videos.entries()){
          
            if(video){
                loadedListRef.current[index] = false;

                const videoElement = document.createElement("video");
                videoElement.src = video.src;
         
              
                const onload = () => {
                    
                    loadedListRef.current[index] = true;
                    onAllLoaded();

                }
                const onProgress = () => {
                    if (video.buffered.length > 0 && video.duration) {
                     
                        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                    
                        const percent = ((bufferedEnd / video.duration) * 100).toFixed(0);
                        if(percent === "100"){
                            onload();
                            onAllLoaded();
                        }
                  
                    }
                }
              

                videoElement.addEventListener("loadeddata",onload);
                videoElement.addEventListener("progress",onProgress);
                return () => {
                    videoElement.removeEventListener("loadeddata",onload);
                    videoElement.removeEventListener("progress",onProgress);
                }
            }
        }
        disableScrolling()
        if(events.loadstart){
            document.dispatchEvent(events.loadstart);
        }
        
    },[events]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(!isLoaded){
                setIsLoaded(true)
            }
        }, 1500);
        return () => {
            clearTimeout(timer)
        }
    }, [isLoaded])
    const onExitComplete = () => {
        enableScrolling();
        if(events.loaderOut){
            document.dispatchEvent(events.loaderOut);
        }
    }
    const registerLoadingEvent: RegisterLoadingEvent  = ({eventType, callback}) => {

    

        document.addEventListener(eventType, callback);

        const removeListener = () => {
            document.removeEventListener(eventType, callback);
        }

        return removeListener
    };
    const providerValue: LoadingProviderValue = {
        isLoaded,
        registerLoadingEvent
    }
    return (
        <>
            <AnimatePresence mode='wait' onExitComplete={onExitComplete}>
                {
                    isLoaded ? (<></>) : (
                        <motion.div 
                            key={`${isLoaded}`}
                            className='
                                fixed 
                                top-0 
                                left-0 
                                right-0 
                                z-[99999] 
                                pointer-events-none 
                                bg-white
                                text-black 
                                min-h-screen
                                h-screen
                                flex
                                justify-center
                                items-center
                                uppercase
                            '
                            initial={{
                                y: "0%"
                            }}
                            exit={{
                                y: ["0%","-100%"],
                                transition: {
                                    duration: 0.75,
                                    ease: [0.33, 1, 0.68, 1],
                                    times: [0, 1]
                                }
                            }}
                        >
                            <HeadingEighthXl>meisken.dev</HeadingEighthXl>
                        </motion.div>
                    )
                }
         
            </AnimatePresence>

            <loadingContext.Provider value={providerValue}>
                {children}
            </loadingContext.Provider>
        </>

    );
};

export default BlankLoadingContextProvider;

export const useLoadingContext = () => {
    if(!loadingContext) {
        console.warn("you might forgot to wrap BlankLoadingContextProvider")
    }
    return useContext(loadingContext)
};

export const useLoadingEventListener = (params: RegisterLoadingEventParams) => {
    const context = useLoadingContext();
    useEffect(() => {
        if(context){
            const removeListener = context.registerLoadingEvent(params);
            return removeListener
        }
    },[context, params])
}