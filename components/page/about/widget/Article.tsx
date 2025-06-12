"use client"
import MaskAndMoveLandingAnimation from '@/components/utilities/animations/landing/MaskAndMoveLandingAnimation';
import ParagraphFourthXl from '@/components/utilities/paragraphs/ParagraphFourthXl';
import ParagraphTwiceXl from '@/components/utilities/paragraphs/ParagraphTwiceXl';
import { aboutContents } from '@/contents/AboutContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'



const Article: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <div className='flex flex-col gap-[20px] max-w-[clamp(640px,calc(((100vw-1024px)/896*190)+640px),830px)] sm:max-w-full '>
            <ParagraphFourthXl>
                <MaskAndMoveLandingAnimation
                    splitTextMode={lang === "zh" ? "characters" : 'words'}
                    splitText={aboutContents[lang]['hero'].subheading}
                    splitTextStyle={lang === "zh" ? {
                        display: "inline-block"
                    } : undefined}
                    stagger={lang === "zh" ? 0.01 : 0.025}
                    delay={0.1875}
                >
                    {/* {aboutContents[lang]['hero'].subheading} */}
                </MaskAndMoveLandingAnimation>
          
            </ParagraphFourthXl>
            <ParagraphTwiceXl className='opacity-90'>
                <MaskAndMoveLandingAnimation
                    splitTextMode={lang === "zh" ? "characters" : 'words'}
                    splitText={aboutContents[lang]['hero'].description}
                    splitTextStyle={lang === "zh" ? {
                        display: "inline-block"
                    } : undefined}
                    stagger={lang === "zh" ? 0.01 : 0.025}
        
                    delay={0.375}
                >
                    {aboutContents[lang]['hero'].description}
                </MaskAndMoveLandingAnimation>
            
            </ParagraphTwiceXl>
        </div>
    );
};

export default Article;