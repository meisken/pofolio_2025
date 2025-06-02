import Line from '@/components/utilities/decorations/Line';
import HeadlineHero from '@/components/utilities/headings/HeadlineHero';
import ParagraphTwiceXl from '@/components/utilities/paragraphs/ParagraphTwiceXl';
import { FC } from 'react'



const Headline: FC = () => {
    return (
        <div className='px-16 h-full flex flex-col justify-center gap-[16px]'>
         
            <HeadlineHero className='flex flex-col uppercase h-fit w-fit'>
                <span className='flex items-center gap-[34px]'>modern <Line /></span>
                <span>aesthetics</span>
            </HeadlineHero>
            <ParagraphTwiceXl className='opacity-90 max-w-[545px]'>
                I’m a web developer and designer build modern, visually appealing, clean websites.  I’m here to transform ideas into stunning digital experiences.
            </ParagraphTwiceXl>
        </div>
    );
};

export default Headline;