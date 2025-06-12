import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Image from 'next/image';
import { FC, RefObject } from 'react'

interface Props{
    containerRef: RefObject<HTMLDivElement | null>,
    pinContainerRef: RefObject<HTMLElement | null>
}

const BackgroundImages: FC<Props> = ({containerRef,pinContainerRef}) => {
    const lang = useCurrentLanguages();
    
    return (
        <CustomScrollAnimation 
            className='w-full h-full relative z-[-1] portrait:h-auto portrait:aspect-video'
                styleFrom={{
                    transform: "translateY(-50%)"
                }}
                styleTo={{
                    transform: "translateY(0%)"
                }}
                ease={"none"}
                trigger={containerRef}
                scrollTriggerVars={{
                    start: () => "top-=50% bottom",
                    end: () => "bottom bottom",
                    scrub: 0,
                   
                }}
        >
            <CustomScrollAnimation
                className='absolute inset-0 z-[3]'
                trigger={pinContainerRef}
                styleFrom={{
                    clipPath: "inset(-1% -1% -1% -1%)"
                }}
                styleTo={{
                    clipPath: "inset(-1% 101% -1% -1%)"
                }}
                ease={"none"}
                scrollTriggerVars={{
                    start: () => "top top",
                    end: () => `top+=${window.innerHeight}px top`,
                    scrub: 0,
                }}
            >
                <Image 
                    src={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                    alt={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                    fill
                    priority
                    className=' grayscale-100 object-cover'
                />
            </CustomScrollAnimation>
            <CustomScrollAnimation
                className='absolute inset-0 z-[2]  '
                scrollTriggerVars={{
                    start: () => `top+=${window.innerHeight}px top`,
                    end: () => `top+=${window.innerHeight*2}px top`,
                    scrub: 0,
                }}
         
                trigger={pinContainerRef}
                blindFlipping={{
                    strips: 30,
                    stagger: 0.0125,
                    gradientDirection: "left"
                }}
                ease={"none"}
            >
                <Image 
                    src={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                    alt={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                    fill
                    priority
                    className='object-cover'
                />
            </CustomScrollAnimation>

    
            <Image 
                src={landingContents[lang]['full-screen-transition'].imgSrcs[1]}
                alt={landingContents[lang]['full-screen-transition'].imgSrcs[1]}
                fill
                priority
                className=' z-[1] object-cover'
            />
        
            
        </CustomScrollAnimation>
    );
};

export default BackgroundImages;