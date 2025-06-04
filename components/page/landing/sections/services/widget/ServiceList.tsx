import HeadingFourthXl from '@/components/utilities/headings/HeadingFourthXl';
import HeadingSm from '@/components/utilities/headings/HeadingSm';
import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'


const ServiceList: FC= () => {
    const lang = useCurrentLanguages();
    return (
        <ul className='flex flex-col w-full border-t-2 border-t-white/50'>
            {landingContents[lang]['services'].services.map(({caption,description},i) => {
                return (
                    <li
                        key={`${caption}-${i}`}
                        className='
                            border-b-2 
                            border-b-white/50 
                            py-6
                            grid
                            grid-cols-2
                            gap-[16px]
                            xs:grid-cols-1
                            sm:px-2
                        '
                    >
                        <span className='inline-flex gap-[4.375vw]'>
                            <HeadingSm>{`0${i + 1}.`}</HeadingSm>
                            <HeadingFourthXl className='max-w-[290px]'>{caption}</HeadingFourthXl>
                        </span>
                        <ParagraphBaseRelax className='max-w-[450px] md:opacity-85 '>
                            {description}
                        </ParagraphBaseRelax>
                    </li>
                )
            })}
        </ul>
    );
};

export default ServiceList;