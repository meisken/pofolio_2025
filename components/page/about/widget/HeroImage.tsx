"use client"
import CustomLandingAnimation from '@/components/utilities/animations/landing/CustomLandingAnimation';
import SpacingLgContainer from '@/components/utilities/containers/SpacingLgContainer';
import { aboutContents } from '@/contents/AboutContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Image from 'next/image';
import { FC } from 'react'
import { Quint } from 'gsap';


const HeroImage: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <SpacingLgContainer
            className='
                z-[-1]
                absolute 
                right-0 
                top-0 
                bottom-0 
                pt-24
                pb-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)] 
                flex
                justify-end
                sm:portrait:justify-center
                sm:portrait:static
                sm:portrait:py-0
                sm:portrait:w-full
                sm:portrait:my-8
            '
        >
            <div 
                className='aspect-[599/871] h-full relative overflow-clip sm:portrait:w-full sm:portrait:h-auto'
            >
                <CustomLandingAnimation
                    className='w-full h-full relative'
                    duration={1.2}
                    ease={Quint.easeOut}
                    styleFrom={{
                        scale: 1.5,
                        clipPath: "inset(-1% 101% -1% -1%)",
                        transform: "translateX(-17.5%)",

                    }}
                    styleTo={{
                        scale: 1,
                        clipPath: "inset(-1% -1% -1% -1%)",
                        transform: "translateX(0%)",
                    }}
                >

                
                    <Image 
                        src={aboutContents[lang]['hero'].imgSrc}
                        alt={aboutContents[lang]['hero'].imgSrc}
                        fill
                        className='object-cover'
                    />
                </CustomLandingAnimation>
            </div>

        </SpacingLgContainer>
    );
};

export default HeroImage;