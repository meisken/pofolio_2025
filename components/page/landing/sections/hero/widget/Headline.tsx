"use client"
import TypingWriter from '@/components/utilities/animation/TypingWriter';
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
                <span className='grid grid-cols-[auto_1fr] items-center gap-[24px]  w-[8ch]'>{landingContents[lang].hero.headline[0]}<Line /></span>
                <span className='tracking-wide h-[1lh] w-fit'>
                    <TypingWriter typingSpeed={140} text={[landingContents[lang].hero.headline[1],landingContents[lang].hero.headline[2]]} />
                </span>
            </HeadlineHero>
            <ParagraphTwiceXl className='opacity-90 max-w-[545px]'>
                {landingContents[lang].hero.description}
            </ParagraphTwiceXl>
        </div>
    );
};

export default Headline;