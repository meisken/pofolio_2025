import { FC } from 'react'



const BackgroundVideo: FC = () => {
    return (
        <div className='absolute inset-0 z-[-1] '>
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline >
                <source  src='/assets/background.mp4' type='video/mp4' />
            </video>
            <div className='absolute bottom-0 left-0 right-0 h-[23.6%]' style={{backgroundImage:"linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"}}></div>
        </div>
    );
};

export default BackgroundVideo;