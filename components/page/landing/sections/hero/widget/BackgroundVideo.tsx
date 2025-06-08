"use client"
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'
import ZoomAndFadeLandingAnimation from '@/components/utilities/animations/landing/ZoomAndFadeLandingAnimation';
import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import useMediaQuery from '@/hooks/useMediaQuery';


const BackgroundVideo: FC = () => {
    const lang = useCurrentLanguages();
    const portraitScreen = useMediaQuery("(orientation: portrait)");
    return (
        <div className='absolute inset-0 z-[-1] portrait:relative portrait:w-full block overflow-clip'>
            <CustomScrollAnimation
                className='w-full h-full'
                styleFrom={{
                    
                    transform: "scale(1) translateY(0%)"

                }}
                styleTo={{
                    
                    transform:   portraitScreen ? "" : "scale(1.1) translateY(33%)"
                }}
                ease={"none"}
                trigger={"self"}
        
                scrollTriggerVars={{
                    start: () => "top top",
                    end: () => `bottom top`,
                    scrub: 0,
                    
                }}

            >
                <ZoomAndFadeLandingAnimation 
                    className='w-full h-full'
                    duration={1}
                    delay={0.7}
                >
                
                        <video 
                            className="w-full h-full object-cover remoteVideo" 
                            playsInline  
                            muted 
                            autoPlay  
                            loop
                            src={landingContents[lang].hero.backgroundVideo.videoSrc}
                        >
                        
                        </video>
                    
                </ZoomAndFadeLandingAnimation>
            </CustomScrollAnimation>
            <div className='absolute bottom-0 left-0 right-0 h-[5%] scale-y-150' style={{backgroundImage:"linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%) "}}></div>
        </div>
    );
};

export default BackgroundVideo;