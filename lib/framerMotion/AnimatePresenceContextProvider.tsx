'use client';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { createContext, FC, ReactNode, useContext, useRef, useState } from 'react'
import { AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation';
import { useSmoothScrollContext } from '../gsap/SmoothScrollRegisterContextProvider';
import NoneTransition from './pageTransitions/NoneTransition';
import { PageTransitionProps } from './pageTransitions/types/PageTransitionProps';
import FullScreenSlideTransition from './pageTransitions/FullScreenSlideTransition';

export type PageTransitionType = "none" | "FullScreenSlide"
interface Props{
    children: ReactNode,
    pageTransitionType?: PageTransitionType,
    mode?: Mode
}
type Mode =  "sync" | "popLayout" | "wait" | undefined;

function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );

}

export type PageTransitionEventTypes = "animationEnd" | "exitComplete" | "animationStart"
export type RegisterAnimationEvent = (eventType: PageTransitionEventTypes, callback: (() => void)[]) => (number[]);

type PageTransitionProviderValue = {
    registerAnimationEvent: RegisterAnimationEvent 
} | null;

const pageTransitionContext = createContext<PageTransitionProviderValue>(null);



const AnimatePresenceContextProvider: FC<Props> = ({children, pageTransitionType = "FullScreenSlide", mode}) => {
    const key = usePathname();
    const SmoothScrollContext = useSmoothScrollContext();

    const disableScrolling = () => {
        console.log("start")
        if(SmoothScrollContext){
            SmoothScrollContext.scrollTo(0, false)
        }
        document.body.style.overflowY = "clip"
        document.body.style.overflowX = "clip"
    }

    const [onAnimationStartCallbacks, setOnAnimationStartCallbacks] = useState<(() => void)[]>([]);
    const [onAnimationEndCallbacks, setOnAnimationEndCallbacks] = useState<(() => void)[]>([]);
    const [onExitCompleteCallbacks, setOnExitCompleteCallbacks] = useState<(() => void)[]>([]);

    const enableScrolling = () => {
        document.body.style.overflowY = "auto"
        document.body.style.overflowX = "clip"
    }
    const onExitComplete = () => {
        enableScrolling();
        onExitCompleteCallbacks.forEach((callback) => {
            callback()
        });
    }
    const onAnimationStart = () => {
        disableScrolling()
        onAnimationStartCallbacks.forEach((callback) => {
            callback()
        });
    }
    const onAnimationEnd = () => {
        enableScrolling();
        onAnimationEndCallbacks.forEach((callback) => {
            callback()
        });
    }

    const registerAnimationEvent: RegisterAnimationEvent  = (eventType, callbacks) => {
        const callbackIndex: number[] = [];
        if(pageTransitionType === "none"){
            console.warn("pageTransitionType is none, any page transition events won't work")
            return callbackIndex
        }
        if(eventType === "animationStart"){
            setOnAnimationStartCallbacks((old) => {
                for(const callback of callbacks){
                    old.push(callback);
                    callbackIndex.push(old.length - 1);
                }
             
                return old
            })
        }
        if(eventType === "animationEnd"){
            setOnAnimationEndCallbacks((old) => {
                for(const callback of callbacks){
                    old.push(callback);
                    callbackIndex.push(old.length - 1);
                }
             
                return old
            })
        }
        if(eventType === "exitComplete"){
            setOnExitCompleteCallbacks((old) => {
                 for(const callback of callbacks){
                    old.push(callback);
                    callbackIndex.push(old.length - 1);
                }
                return old
            })
        }
        return callbackIndex
    };

    const providerValue: PageTransitionProviderValue = {
        registerAnimationEvent
    };
    
    const PageTransitionComponents: Record<PageTransitionType, FC<PageTransitionProps>> = {
        "none": NoneTransition,
        "FullScreenSlide": FullScreenSlideTransition
    };
    const PageTransitionComponent = PageTransitionComponents[pageTransitionType];

    return (
        <AnimatePresence mode={mode} onExitComplete={onExitComplete} >
            <PageTransitionComponent key={key} onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd} >
                <pageTransitionContext.Provider value={providerValue}>
                    <FrozenRouter>{children}</FrozenRouter>
                </pageTransitionContext.Provider>
            </PageTransitionComponent>                    
        </AnimatePresence>
    );
};

export default AnimatePresenceContextProvider;

const usePageTransitionContext = () => {
    if(!pageTransitionContext) {
        console.warn("you might forgot to wrap AnimatePresenceContextProvider")
    }
    return useContext(pageTransitionContext)
};
export { usePageTransitionContext }