"use client"
import Line from '@/components/utilities/decorations/Line';
import HeadlineHero from '@/components/utilities/headings/HeadlineHero';
import ParagraphTwiceXl from '@/components/utilities/paragraphs/ParagraphTwiceXl';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';

import { FC } from 'react'



const Headline: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <div className='px-16 h-full flex flex-col justify-center gap-[16px]'>
         
            <HeadlineHero className='flex flex-col uppercase h-fit w-fit'>
                <span className='flex items-center gap-[34px]'>{landingContents[lang].hero.headline[0]}<Line /></span>
                <span>{landingContents[lang].hero.headline[1]}</span>
            </HeadlineHero>
            <ParagraphTwiceXl className='opacity-90 max-w-[545px]'>
                {landingContents[lang].hero.description}
            </ParagraphTwiceXl>
        </div>
    );
};

export default Headline;