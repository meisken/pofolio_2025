"use client"
import FacebookShareButton from '@/components/utilities/buttons/FacebookShareButton';
import TwitterShareButton from '@/components/utilities/buttons/TwitterShareButton';
import UnderlineButton from '@/components/utilities/buttons/UnderlineButton';
import SpacingLgContainer from '@/components/utilities/containers/SpacingLgContainer';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { useUrl } from '@/hooks/useUrl';
import { FC } from 'react'



const ShareButtonsContainer: FC = () => {
    const url = useUrl();
     const lang = useCurrentLanguages();
    return (
        <SpacingLgContainer className='absolute bottom-0 left-0 right-0 pb-12 flex justify-between'>
            <UnderlineButton>{landingContents[lang]['lets-talk-button']}</UnderlineButton>
            <div className='flex gap-10'>
                <FacebookShareButton url={url ?? ""} />
                <TwitterShareButton url={url ?? ""}  />
            </div>
        </SpacingLgContainer>
    );
};

export default ShareButtonsContainer;