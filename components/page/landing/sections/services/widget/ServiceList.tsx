import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import HeadingFourthXl from '@/components/utilities/headings/HeadingFourthXl';
import HeadingSm from '@/components/utilities/headings/HeadingSm';
import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC, useRef } from 'react'


const ServiceList: FC= () => {
    const lang = useCurrentLanguages();
    const containerRef = useRef<HTMLUListElement>(null);
    return (
        <CustomScrollAnimation 
            className='
             
            '
            trigger={containerRef}
            styleFrom={{
                transform: "scaleX(0)",
                transformOrigin: "left"
            }}
            styleTo={{
                transform: "scaleX(1)"
            }}
            duration={0.75}
            scrollTriggerVars={{
                start: () => "center bottom",
                end: () => "center bottom",
           
            }}
        >
            <ul className='flex flex-col w-full border-t-2 border-t-white/50' ref={containerRef}>
                {landingContents[lang]['services'].services.map(({caption,description},i) => {
                    return (
                        <li
                            key={`${caption}-${i}`}
                            className='
                          
                                border-b-2 
                                border-b-white/50 
                                py-6
                                w-full
                                xs:grid-cols-1
                                sm:px-2
                            '
                        >
                    
                                <CustomScrollAnimation 
                                    trigger={containerRef}
                                    className='
                                        grid
                                        grid-cols-2
                                        gap-[16px]
                                    '
                                    styleFrom={{
                                        opacity: 0,
                                        filter: "blur(8px)"
                                    }}
                                    styleTo={{
                                        opacity: 1,
                                        filter: "blur(0px)"
                                    }}
                                    duration={0.3}
                                    delay={0.65}
                                    scrollTriggerVars={{
                                        start: () => "center bottom",
                                        end: () => "center bottom",
                                  
                                    }}
                                >
                                    <span className='inline-flex gap-[4.375vw]'>
                                        <HeadingSm>{`0${i + 1}.`}</HeadingSm>
                                        <HeadingFourthXl className='max-w-[290px]'>{caption}</HeadingFourthXl>
                                    </span>
                                    <ParagraphBaseRelax className='max-w-[450px] md:opacity-75 '>
                                        {description}
                                    </ParagraphBaseRelax>
                                </CustomScrollAnimation>
                        
                        </li>
                    )
                })}
            </ul>
        </CustomScrollAnimation>
    );
};

export default ServiceList;