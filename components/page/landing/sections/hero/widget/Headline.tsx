"use client"

import MaskAndMoveLandingAnimation from '@/components/utilities/animations/landing/MaskAndMoveLandingAnimation';
import ScaleLandingAnimation from '@/components/utilities/animations/landing/ScaleLandingAnimation';
import ZoomAndFadeLandingAnimation from '@/components/utilities/animations/landing/ZoomAndFadeLandingAnimation';
import TypingWriter from '@/components/utilities/animations/TypingWriter';
import SpacingLgContainer from '@/components/utilities/containers/SpacingLgContainer';
import Line from '@/components/utilities/decorations/Line';
import HeadlineHero from '@/components/utilities/headings/HeadlineHero';
import ParagraphTwiceXl from '@/components/utilities/paragraphs/ParagraphTwiceXl';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';


import { FC, useRef } from 'react'

const Headline: FC = () => {
    const lang = useCurrentLanguages();

    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <SpacingLgContainer className='h-full flex flex-col justify-center gap-[16px] portrait:justify-start' ref={containerRef}>
         
            <HeadlineHero className='flex flex-col uppercase h-fit w-fit'>
                <span 
                    className='
                        grid 
                        font-light 
                        grid-cols-[auto_1fr] 
                        items-center 
                        gap-[24px]  
                        w-[8ch] 
                        sm:w-[9ch]
                    '
                >
                    <MaskAndMoveLandingAnimation 
                        duration={0.75}
                        delay={0.7}
                    >
                        {landingContents[lang].hero.headline[0]}
                    </MaskAndMoveLandingAnimation>
                    
                    <ScaleLandingAnimation 
                        className='w-full origin-[center_left]'
                        scaleFactor={{
                            from: {
                                x: 1,
                                y: 0
                            },
                            to: {
                                x: 1,
                                y: 1
                            }
                        }}
                        duration={0.75}
                    >
                        <Line />
                    </ScaleLandingAnimation>
                    
                </span>

                <MaskAndMoveLandingAnimation  
                    className=' font-semibold h-[1lh] w-fit'
                    duration={0.75}
                    delay={0.7}
                >
                    <TypingWriter 
                        typingSpeed={140} 
                        text={[landingContents[lang].hero.headline[1],landingContents[lang].hero.headline[2]]} 
                        startingDelay={2000} 
                        defaultText={landingContents[lang].hero.headline[1]}
                    />
                </MaskAndMoveLandingAnimation>

            </HeadlineHero>
            <ParagraphTwiceXl className='opacity-90 w-[clamp(460px,calc(((100vw-1024px)/896*65)+460px),545px)] lg:w-[clamp(360px,calc(((100vw-480px)/544*80)+360px),420px)] xs:w-full'>
             
                <ZoomAndFadeLandingAnimation 
                    // splitText={landingContents[lang].hero.description} 
                    // splitTextMode='words' 
                    // stagger={0.02}
                    zoom={{
                        from: 1,
                        to: 1
                    }}
                    duration={1.5}
                    delay={0.7}
                >
                    {landingContents[lang].hero.description}
                </ZoomAndFadeLandingAnimation>
            </ParagraphTwiceXl>
        </SpacingLgContainer>
    );
};

export default Headline;