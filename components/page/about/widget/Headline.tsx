"use client"
import MaskAndMoveLandingAnimation from '@/components/utilities/animations/landing/MaskAndMoveLandingAnimation';
import HeadlineHero from '@/components/utilities/headings/HeadlineHero';
import { aboutContents } from '@/contents/AboutContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'



const Headline: FC = () => {
 const lang = useCurrentLanguages();
    return (
        <HeadlineHero className='max-w-[1300px] uppercase  lg:max-w-[620px]'>
            <MaskAndMoveLandingAnimation 
                splitText={aboutContents[lang]['hero'].headline}
                splitTextMode='words'
             
            >
                {/* {aboutContents[lang]['hero'].headline} */}
            </MaskAndMoveLandingAnimation>
            
        </HeadlineHero>
    );
};

export default Headline;