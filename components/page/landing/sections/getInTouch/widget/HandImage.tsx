import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Image from 'next/image';
import { FC } from 'react'


const HandImage: FC= () => {
    const lang = useCurrentLanguages();
     
    return (
        <div 
            className='
                [--hand-image-width:clamp(490px,calc(((100vw-768px)/1152*491)+490px),981px)]
                
                w-[var(--hand-image-width)] 
                h-[431/981*calc(var(--hand-image-width))]
                aspect-[981/431] 
                absolute 
                right-0 
                top-1/2
                -translate-y-1/2 
                z-[-1]

                sm:top-full
           
                sm:left-4
                sm:w-full
           
                lg:opacity-50
            '
        >
            <Image 
                fill
                className='object-cover'
                src={landingContents[lang]['get-in-touch']['hand-image-src']}
                alt={landingContents[lang]['get-in-touch']['hand-image-src']}
            />
          
        </div>
    );
};

export default HandImage;