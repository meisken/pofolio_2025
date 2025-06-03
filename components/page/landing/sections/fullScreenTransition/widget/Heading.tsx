import SpacingLgContainer from '@/components/utilities/containers/SpacingLgContainer';
import HeadingEighthXl from '@/components/utilities/headings/HeadingEighthXl';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'



const Heading: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <SpacingLgContainer className='absolute left-0 bottom-0 pb-20'>
            <HeadingEighthXl className='flex flex-col'>
                <span>{landingContents[lang]['full-screen-transition'].heading[0]}</span>
                <span>{landingContents[lang]['full-screen-transition'].heading[1]}</span>
            </HeadingEighthXl>
        </SpacingLgContainer>
    );
};

export default Heading;