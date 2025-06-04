"use client"
import TypingWriter from '@/components/utilities/animation/TypingWriter';
import SpacingLgContainer from '@/components/utilities/containers/SpacingLgContainer';
import Line from '@/components/utilities/decorations/Line';
import HeadlineHero from '@/components/utilities/headings/HeadlineHero';
import ParagraphTwiceXl from '@/components/utilities/paragraphs/ParagraphTwiceXl';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';

import { FC } from 'react'



const Headline: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <SpacingLgContainer className='h-full flex flex-col justify-center gap-[16px] portrait:justify-start'>
         
            <HeadlineHero className='flex flex-col uppercase h-fit w-fit'>
                <span className='grid font-light grid-cols-[auto_1fr] items-center gap-[24px]  w-[8ch] sm:w-[9ch]'>{landingContents[lang].hero.headline[0]}<Line /></span>
                <span className=' font-semibold h-[1lh] w-fit'>
                    <TypingWriter typingSpeed={140} text={[landingContents[lang].hero.headline[1],landingContents[lang].hero.headline[2]]} />
                </span>
            </HeadlineHero>
            <ParagraphTwiceXl className='opacity-90 w-[clamp(460px,calc(((100vw-1024px)/896*65)+460px),545px)] lg:w-[clamp(360px,calc(((100vw-480px)/544*80)+360px),420px)] xs:w-full'>
                {landingContents[lang].hero.description}
            </ParagraphTwiceXl>
        </SpacingLgContainer>
    );
};

export default Headline;