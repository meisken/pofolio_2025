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
        <div className='w-full flex justify-between'>
            <div className='flex flex-col justify-between'>
                <ArticleContainer 
                    title={landingContents[lang]['what-i-do'].heading}
                    description={landingContents[lang]['what-i-do'].description}
                />
                <div className='flex flex-col h-fit gap-4'>
                    <HeadingSmDark>{landingContents[lang]['what-i-do']['3d-hover-card'].caption}</HeadingSmDark>
                    <ThreeDHoverCard
                        className='w-[575px] h-[368px]'
                    >
                        <div className='bg-[#151718]' style={{boxShadow: "0px 0px 16px 16px rgba(0, 0, 0, 0.15)"}}>
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
            
            <div className='flex flex-col h-fit gap-4'>
                <HeadingSmDark>{landingContents[lang]['what-i-do']['image-parallax'].caption}</HeadingSmDark>
                <div className='w-[608px] aspect-[608/760] overflow-hidden relative'>
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
    );
};

export default Article;
