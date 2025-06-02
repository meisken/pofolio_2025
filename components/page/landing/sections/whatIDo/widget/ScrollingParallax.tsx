import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import ParagraphFourthXl from '@/components/utilities/paragraphs/ParagraphFourthXl';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Image from 'next/image';
import { FC } from 'react'



const ScrollingParallax: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <div className='w-full'>
            <div className='flex w-full justify-center text-center my-24'>
                <ParagraphFourthXl className='max-w-[775px]'>{landingContents[lang]['what-i-do']['parallax-scrolling'].caption}</ParagraphFourthXl>
            </div>
            <div className='flex justify-between'>
                <div className='w-[493px] h-[351px] aspect-[493/351] overflow-hidden relative'>
                    <Image 
                        src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[0]}
                        alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[0]}
                        objectFit='cover'
                        fill
                        className=' object-[0%_50%] object-cover'
                    />
                </div>

                <div className='w-[792px] h-[528px] aspect-[792/528] overflow-hidden relative mt-24'>
                    <Image 
                        src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[1]}
                        alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[1]}
                        objectFit='cover'
                        fill
                        className=' object-[0%_50%] object-cover'
                    />
                </div>

            </div>
            <div className='w-full mt-12 flex justify-between'>

                <div className='w-[50%] flex justify-end'>

                    <div className='w-[379px] h-[542px] aspect-[379/542] overflow-hidden relative mr-[208px]  '>
                        <Image 
                            src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[2]}
                            alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[2]}
                            objectFit='cover'
                            fill
                            className='object-[0%_50%] object-cover'
                        />
                    </div>

                </div>
                <div className='w-[792px]'>
                    <ParagraphBaseRelax className='mt-20 max-w-[455px]'>
                        Parallax scrolling a trending web design technique to add depth and visual interest to the design. It creates a dynamic experience that keeps users engaged. 
                    </ParagraphBaseRelax>
                </div>
            </div>
        </div>
    );
};

export default ScrollingParallax;