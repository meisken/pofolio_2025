import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'



const BackgroundVideo: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <div className='absolute inset-0 z-[-1] '>
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload='auto'>
                <source  src={landingContents[lang].hero.backgroundVideo.videoSrc} type='video/mp4' />
            </video>
            <div className='absolute bottom-[-1px] left-0 right-0 h-[15%]' style={{backgroundImage:"linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 100%) "}}></div>
        </div>
    );
};

export default BackgroundVideo;