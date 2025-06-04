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
            <div className='flex justify-between gap-10 lg:justify-start lg:flex-col lg:gap-'>
                <div 
                    className='
                        [--street-image-width:clamp(400px,calc(((100vw-1024px)/896*93)+400px),493px)]
                        w-[var(--street-image-width)] 
                        h-[calc(351/493*var(--street-image-width))] 
                        aspect-[493/351] 
                        overflow-hidden 
                        relative
                        lg:max-w-full
                    '
                >
                    <Image 
                        src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[0]}
                        alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[0]}
                        fill
                        className=' object-[0%_50%] object-cover'
                    />
                </div>

                <div 
                    className='
                        [--camera-image-width:clamp(480px,calc(((100vw-1024px)/896*312)+480px),792px)]
                        w-[var(--camera-image-width)] 
                        h-[calc(528/792*var(--camera-image-width))] 
                        aspect-[792/528] 
                        overflow-hidden 
                        relative 
                        mt-24
                        lg:mt-0
                        lg:self-end
                        lg:max-w-full
                    '
                >
                    <Image 
                        src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[1]}
                        alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[1]}
                        fill
                        className=' object-[0%_50%] object-cover'
                    />
                </div>

            </div>
            <div className='w-full mt-12 flex justify-between lg:flex-col-reverse lg:justify-start'>

                <div className='w-[50%] flex justify-center lg:w-[80%] sm:portrait:w-[100%] sm:landscape:w-[100%]'>

                    <div 
                        className='
                            lg:max-w-full
                            w-[379px] 
                            h-[542px] 
                            aspect-[379/542] 
                            overflow-hidden 
                            relative   
                        '
                    >
                        <Image 
                            src={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[2]}
                            alt={landingContents[lang]['what-i-do']['parallax-scrolling'].imgSrcs[2]}
                            fill
                            className='object-[0%_50%] object-cover'
                        />
                    </div>

                </div>
                <div 
                    className='
                        [--camera-image-width:clamp(480px,calc(((100vw-1024px)/896*312)+480px),792px)]
                        w-[var(--camera-image-width)] 
                        lg:max-w-full
                    '
                >
                    <ParagraphBaseRelax className='mt-20 max-w-[455px] lg:mt-0 lg:mb-12'>
                        {landingContents[lang]['what-i-do']['parallax-scrolling'].description}
                    </ParagraphBaseRelax>
                </div>
            </div>
        </div>
    );
};

export default ScrollingParallax;