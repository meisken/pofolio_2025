"use client"
import CustomLandingAnimation from '@/components/utilities/animations/landing/CustomLandingAnimation';
import FacebookShareButton from '@/components/utilities/buttons/FacebookShareButton';
import TwitterShareButton from '@/components/utilities/buttons/TwitterShareButton';
import UnderlineButton from '@/components/utilities/buttons/UnderlineButton';
import SpacingLgContainer from '@/components/utilities/containers/SpacingLgContainer';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Link from 'next/link';
import { FC } from 'react'



const ShareButtonsContainer: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <SpacingLgContainer 
            className='
                absolute 
                bottom-0 
                left-0 
                right-0 
                pb-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)] 
                
                
                portrait:static
            '
        >
            <CustomLandingAnimation
                styleFrom={{
                    opacity: 0,
                    transform: "translateY(20px)"
                }}
                styleTo={{
                    opacity: 1,
                    transform: "translateY(0px)"
                }}
                delay={0.3}
                duration={0.6}
                className='
                    flex 
                    justify-between
                    w-full
                '
            >
                <Link href={landingContents[lang]['lets-talk-button'].link}>
                    <UnderlineButton>
                        {landingContents[lang]['lets-talk-button'].name}
                    </UnderlineButton>
                </Link>
                <div className='flex gap-10'>
                    <Link href={landingContents[lang].hero.contact.facebook}>
                        <FacebookShareButton />
                    </Link>
                    <Link href={landingContents[lang].hero.contact.twitter}>
                        <TwitterShareButton  />
                    </Link>
                </div>
            </CustomLandingAnimation>

        </SpacingLgContainer>
    );
};

export default ShareButtonsContainer;