import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Image from 'next/image';
import { FC } from 'react'



const BackgroundImages: FC = () => {
    const lang = useCurrentLanguages();
    
    return (
        <div className='w-full h-full relative z-[-1] portrait:h-auto portrait:aspect-video'>
            <Image 
                src={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                alt={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                objectFit='cover'
                fill
                className=' grayscale-100 z-[3]'
            />
            <Image 
                src={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                alt={landingContents[lang]['full-screen-transition'].imgSrcs[0]}
                objectFit='cover'
                fill
                className='z-[2]'
            />
            <Image 
                src={landingContents[lang]['full-screen-transition'].imgSrcs[1]}
                alt={landingContents[lang]['full-screen-transition'].imgSrcs[1]}
                objectFit='cover'
                fill
                className='z-[1]'
            />
        </div>
    );
};

export default BackgroundImages;