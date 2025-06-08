import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import CustomScrollAnimationImage from '@/components/utilities/animations/scroll/CustomScrollAnimationImage';
import ParagraphFourthXl from '@/components/utilities/paragraphs/ParagraphFourthXl';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC, RefObject, useRef } from 'react'
import ParagraphXlRelax from '@/components/utilities/paragraphs/ParagraphXlRelax';
import useMediaQuery from '@/hooks/useMediaQuery';
import ParagraphXs from '@/components/utilities/paragraphs/ParagraphXs';
import Tag from '@/components/utilities/decorations/Tag';
interface Props{
    containerRef: RefObject<HTMLElement | null>
}

const ScrollingParallax: FC<Props> = ({}) => {
    const lang = useCurrentLanguages();
    const imagesSectionRef = useRef<HTMLDivElement>(null);
    const headlineContainerRef = useRef<HTMLDivElement>(null);
    const descriptionAreaContainerRef = useRef<HTMLDivElement>(null);
    const mdScreen = useMediaQuery("(max-width: 768px)");

    return (
        <div className='w-full'>
            <div className='flex w-full justify-center items-center text-center min-h-[calc(var(--dvh)*80)]' ref={headlineContainerRef}>
                <CustomScrollAnimation
                            
                        trigger={headlineContainerRef}
                        endTrigger={descriptionAreaContainerRef}
                        ease={"none"}
                        pin={"self"}
                        // duration={0.6}

                        styleFrom={{
                            opacity: 1
                        }}
                        styleTo={{
                            opacity: 0
                        }}
                        
                        scrollTriggerVars={{
                        
                            start: () => "center center",
                            end: () => `center center`,
                            toggleActions: "play none none reverse",
                            scrub: 0,
                    
                            pinType: "transform"
                            
                        }}
                >

                
                    <ParagraphFourthXl className='max-w-[clamp(550px,calc(((100vw-1024px)/896*225)+550px),775px)]'>
                
                        {landingContents[lang]['what-i-do']['parallax-scrolling'].caption}
                    

                
                    </ParagraphFourthXl>
                </CustomScrollAnimation>
            </div>
            <div className='flex justify-between gap-10 lg:justify-start lg:flex-col lg:gap-10' ref={imagesSectionRef}>
                <div
            
                    className='
                        [--street-image-width:clamp(400px,calc(((100vw-1024px)/896*93)+400px),493px)]
                        w-[var(--street-image-width)] 
                        h-[calc(351/493*var(--street-image-width))] 
                        aspect-[493/351] 
                     
                        relative
                        lg:max-w-full
                    '
                >
                    <CustomScrollAnimation
                        styleFrom={{
                            opacity: 0
                        }}
                        styleTo={{
                            opacity: 1
                        }}
                        className='w-full h-full relative'
                        trigger={"self"}
                        ease={"none"}
                        scrollTriggerVars={{
                            start: () => "top bottom",
                            end: () => "bottom bottom",
                            scrub: 0
                        }}
                    >
                        <CustomScrollAnimationImage 
                            src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[0]}
                            alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[0]}
                            styleFrom={{
                                objectPosition: "0% 80%",
                                transform: "translateY(0%)"

                            }}
                            styleTo={{
                                objectPosition: "0% 20%",
                                transform:   mdScreen ? "" : "translateY(100%)"
                            }}
                            ease={"none"}
                            trigger={"self"}
                            scrollTriggerVars={{
                                start: () => "center bottom",
                                end: () => `bottom+=${window.innerHeight*1.5}px bottom`,
                                scrub: 0,
                            }}
                            className='object-cover'
                        />
                        <Tag 
                            className='
                            
                                bottom-0 
                                left-0 
                                -translate-x-1/2 
                                md:bottom-1/2
                                md:translate-y-1/2
                            ' 
                            dataSpeed={ mdScreen ? "1.35" : "0.7"}
                        >
                            <ParagraphXs className='text-white/90'>{landingContents[lang]['what-i-do']['parallax-scrolling'].imgsCaptions[0]}</ParagraphXs>
                        </Tag>
                    </CustomScrollAnimation>
                 
                </div>

                <div 
                    className='
                        [--camera-image-width:clamp(480px,calc(((100vw-1024px)/896*312)+480px),792px)]
                        [--camera-image-height:calc(528/792*var(--camera-image-width))]
                        w-[var(--camera-image-width)] 
                        h-[var(--camera-image-height)] 
                        aspect-[792/528] 
                   
                        relative 
                        mt-[calc(var(--camera-image-height)*0.5)]
                        lg:mt-0
                        lg:self-end
                        lg:max-w-full
                    '
                >
                    <CustomScrollAnimation
                        styleFrom={{
                            opacity: 0
                        }}
                        styleTo={{
                            opacity: 1
                        }}
                        className='w-full h-full relative'
                        trigger={"self"}
                        ease={"none"}
                        scrollTriggerVars={{
                            start: () => "top bottom",
                            end: () => "bottom bottom",
                            scrub: 0
                        }}
                    >
                        <CustomScrollAnimationImage  
                            src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[1]}
                            alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[1]}
                            styleFrom={{
                                objectPosition: "0% 80%",
                                transform: "translateY(0%)"
                            }}
                            styleTo={{
                                objectPosition: "0% 20%",
                                transform:  mdScreen ? "" : "translateY(-50%)"
                            }}
                            ease={"none"}
                            trigger={"self"}

                            scrollTriggerVars={{
                                start: () => "center bottom",
                                end: () => `bottom+=${window.innerHeight}px bottom`,
                                scrub: 0,
                              
                            }}

                            className='object-cover'
                        />
                        <Tag className='top-[25%] left-0 -translate-x-1/2' dataSpeed="1.7">
                            <ParagraphXs className='text-white/90'>{landingContents[lang]['what-i-do']['parallax-scrolling'].imgsCaptions[1]}</ParagraphXs>
                        </Tag>
                        <Tag className='top-1/2 -translate-y-1/2  right-0 translate-x-1/2' dataSpeed="1.4">
                            <ParagraphXs className='text-white/90'>{landingContents[lang]['what-i-do']['parallax-scrolling'].imgsCaptions[2]}</ParagraphXs>
                        </Tag>
                      
                    </CustomScrollAnimation>
                </div>

            </div>

            <div className='w-full mt-12 grid grid-cols-2 md:grid-cols-1 ' ref={descriptionAreaContainerRef}>

               <CustomScrollAnimation 
                    trigger={"self"}
                    styleFrom={{
                        opacity: 0,
                        
                    }}
                    styleTo={{
                        opacity: 1,
                        
                    }}
                    
                    ease={"none"}
                    scrollTriggerVars={{
                        start: () => "top bottom",
                        end: () => "center bottom",
                        scrub: 0
                    
                        
                    }}
             
                    className='
                        
                        w-full
                        flex 
                        justify-center
                        lg:max-w-full
                     
                    '
                >
                    <ParagraphXlRelax className='mt-12 max-w-[540px] lg:mt-0 lg:mb-12 '>
                   
                        <span data-speed={mdScreen?  "1" : "0.9"} className='inline-block'>
                            {landingContents[lang]['what-i-do']['parallax-scrolling'].description}
                        </span>
                     
                        
                    </ParagraphXlRelax>
                </CustomScrollAnimation>

                <div className='w-full flex justify-center  ' >

                    <CustomScrollAnimation 
                        className='
                            lg:max-w-full
                            w-[379px] 
                            h-[600px] 
                            aspect-[379/600] 
                            overflow-hidden
                            relative   
                        '

                        styleFrom={{
                            transform: "translateY(0%)",
                        

                        }}
                        styleTo={{
                           transform:  mdScreen ? "" : "translateY(-40%)",
                            
                        }}
                        ease={"none"}
                        trigger={"self"}
                        scrollTriggerVars={{
                            start: () => "center bottom",
                            end: () => `center+=${window.innerHeight}px bottom`,
                            scrub: 0,
                        
                        }}
                    >
                  
                        <CustomScrollAnimationImage 
                            src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[2]}
                            alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[2]}
                            styleFrom={{
                                objectPosition: "0% 100%",
                            

                            }}
                            styleTo={{
                                objectPosition: "0% 0%",
                                
                            }}
                            duration={1}
                            ease={"none"}
                            trigger={"self"}
                            scrollTriggerVars={{
                                start: () => "center bottom",
                                end: () => `center+=${window.innerHeight}px bottom`,
                                scrub: 0,   

                    
                            }}
                            className=' object-cover'
                        />
                     
  
                    </CustomScrollAnimation>

                </div>

 
            </div>
        </div>
    );
};

export default ScrollingParallax;