import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Image from 'next/image';
import { FC } from 'react'


const HandImage: FC= () => {
    const lang = useCurrentLanguages();
     
    return (
        <div className='w-fit h-fit absolute right-0 top-0'>
            <Image 
                width={981}
                height={431}
                objectFit='cover'
                src={landingContents[lang]['get-in-touch']['hand-image-src']}
                alt={landingContents[lang]['get-in-touch']['hand-image-src']}
            />
        </div>
    );
};

export default HandImage;