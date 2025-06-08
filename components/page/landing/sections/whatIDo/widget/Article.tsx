import HoverParallaxImage from '@/components/utilities/animations/hover/HoverParallaxImage';
import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import FadeInScrollAnimation from '@/components/utilities/animations/scroll/FadeInScrollAnimation';
import ImageRevealScrollAnimation from '@/components/utilities/animations/scroll/ImageRevealScrollAnimation';
import ThreeDHoverCard from '@/components/utilities/cards/ThreeDHoverCard';
import ArticleContainer from '@/components/utilities/containers/ArticleContainer';
import HeadingSmDark from '@/components/utilities/headings/HeadingSmDark';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';

import Image from 'next/image';
import { FC, RefObject, useRef } from 'react'

interface Props{
    containerRef: RefObject<HTMLElement | null>
}

const Article: FC<Props> = ({containerRef}) => {
    const lang = useCurrentLanguages();
    const threeDCardContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div className='w-full  @container/what-i-do '>
            <div className='w-full flex justify-between gap-3 @max-[840px]/what-i-do:flex-col '>

                
                <div className='flex flex-col justify-between w-fit lg:gap-9'>
                    <ArticleContainer 
                        title={landingContents[lang]['what-i-do'].heading}
                        description={landingContents[lang]['what-i-do'].description}
                        customTriggerRef={containerRef}

                    />
                    <div className='flex flex-col h-fit gap-4' ref={threeDCardContainerRef}>
                        <HeadingSmDark>
                            <CustomScrollAnimation
                                trigger={threeDCardContainerRef}
                                duration={0.3}
                                scrollTriggerVars={{
                                    start: () => "bottom bottom",
                                    end: () => "bottom bottom",
                                }}
                                styleFrom={{
                                    opacity: 0
                                }}
                                styleTo={{
                                    opacity: 1
                                }}
                                className='inline'
                            >
                                {landingContents[lang]['what-i-do']['3d-hover-card'].caption}
                            </CustomScrollAnimation>
                        </HeadingSmDark>

                            <FadeInScrollAnimation
                                trigger={threeDCardContainerRef}
                                ease={"none"}
                                duration={0.3}
                                scrollTriggerVars={{
                                    start: () => "bottom bottom",
                                    end: () => "bottom bottom",
                                }}
                            >

                            
                                <ThreeDHoverCard
                                    className='w-[95%] max-w-[575px] aspect-[575/368]  @max-[840px]/what-i-do:max-w-full @max-[840px]/what-i-do:w-full'
                                >
                                    <CustomScrollAnimation
                                        styleFrom={{
                                            clipPath: "inset(0% 0% 101% 0%)"
                                        }}
                                        styleTo={{
                                            clipPath: "inset(0% 0% -1% 0%)"
                                        }}
                                        duration={1.5}
                                        delay={0.2}
                                        ease={"none"}
                                        trigger={threeDCardContainerRef}
                                        scrollTriggerVars={{
                                            start: () => "top center",
                                            end: () => "top center",
                                        }}
                                    >
                                    
                                        <Image 
                                            src={landingContents[lang]['what-i-do']['3d-hover-card'].imgSrc}
                                            alt={landingContents[lang]['what-i-do']['3d-hover-card'].imgSrc}
                                            width={1274}
                                            height={826}
                                            className='w-full object-cover'
                                        />
                                    </CustomScrollAnimation>
                                </ThreeDHoverCard>
                            </FadeInScrollAnimation>

                    </div>
                </div>
                
                <div className=' flex flex-col h-fit gap-4  @max-[840px]/what-i-do:mt-9'>
                    <HeadingSmDark>
                        <CustomScrollAnimation
                       
                            duration={0.3}
                            trigger={containerRef}
                            scrollTriggerVars={{
                                start: () => "top center",
                                end: () => "top center",
                            }}
                            styleFrom={{
                                opacity: 0
                            }}
                            styleTo={{
                                opacity: 1
                            }}
                            className='inline'
                        >
                            {landingContents[lang]['what-i-do']['image-parallax'].caption}
                        </CustomScrollAnimation>
                    </HeadingSmDark>
                    <div
                    
                        className='
                            w-[clamp(440px,calc(((100vw-1024px)/896*148)+440px),608px)] 
                            lg:w-[clamp(380px,calc(((100vw-768px)/256*60)+380px),440px)] 
                            @max-[840px]/what-i-do:w-full
                            aspect-[608/800] 
                            overflow-hidden relative
                      
                        '
   
                    >
                        <ImageRevealScrollAnimation
                            trigger={containerRef}
                            scrollTriggerVars={{
                                start: () => "top center",
                                end: () => "top center",
                            }}
                            className='w-full h-full'
                        >
                     
                            <HoverParallaxImage 
                            
                                //hover parallax
                          
                                className='object-cover'
                                src={landingContents[lang]['what-i-do']['image-parallax'].imgSrc}
                                alt={landingContents[lang]['what-i-do']['image-parallax'].imgSrc}
                                fill
                            
                            />
                       
                       
                         
                        </ImageRevealScrollAnimation>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
