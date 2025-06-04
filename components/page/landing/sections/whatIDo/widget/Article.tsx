import ThreeDHoverCard from '@/components/utilities/cards/ThreeDHoverCard';
import ArticleContainer from '@/components/utilities/containers/ArticleContainer';
import HeadingSmDark from '@/components/utilities/headings/HeadingSmDark';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';

import Image from 'next/image';
import { FC } from 'react'



const Article: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <div className='w-full  @container/what-i-do '>
            <div className='w-full flex justify-between gap-3 @max-[840px]/what-i-do:flex-col '>

                
                <div className='flex flex-col justify-between w-fit lg:gap-9'>
                    <ArticleContainer 
                        title={landingContents[lang]['what-i-do'].heading}
                        description={landingContents[lang]['what-i-do'].description}
                    />
                    <div className='flex flex-col h-fit gap-4'>
                        <HeadingSmDark>{landingContents[lang]['what-i-do']['3d-hover-card'].caption}</HeadingSmDark>
                        <ThreeDHoverCard
                            className='w-[95%] max-w-[575px] aspect-[575/368]  @max-[840px]/what-i-do:max-w-full @max-[840px]/what-i-do:w-full'
                        >
                            <div className='bg-[#151718] rounded-[4px]' style={{boxShadow: "0px 0px 16px 16px rgba(0, 0, 0, 0.15)"}}>
                                <Image 
                                    src={landingContents[lang]['what-i-do']['3d-hover-card'].imgSrc}
                                    alt={landingContents[lang]['what-i-do']['3d-hover-card'].imgSrc}
                                    objectFit='cover'
                                    width={1274}
                                    height={826}
                                    className='w-full object-cover'
                                />
                            </div>
                        </ThreeDHoverCard>
                    </div>
                </div>
                
                <div className=' flex flex-col h-fit gap-4  @max-[840px]/what-i-do:mt-9 '>
                    <HeadingSmDark>{landingContents[lang]['what-i-do']['image-parallax'].caption}</HeadingSmDark>
                    <div 
                        className='
                            w-[clamp(440px,calc(((100vw-1024px)/896*148)+440px),608px)] 
                            lg:w-[clamp(380px,calc(((100vw-768px)/256*60)+380px),440px)] 
                            @max-[840px]/what-i-do:w-full
                            aspect-[608/800] 
                            overflow-hidden relative
                        '
                    >
                        <Image 
                            src={landingContents[lang]['what-i-do']['image-parallax'].imgSrc}
                            alt={landingContents[lang]['what-i-do']['image-parallax'].imgSrc}
                            objectFit='cover'
                            fill
                            className='object-[0%_50%] object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
