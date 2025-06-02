import { FC } from 'react'
import BackgroundVideo from './widget/BackgroundVideo';
import Headline from './widget/Headline';
import ShareButtonsContainer from './widget/ShareButtonsContainer';


const Hero: FC = () => {
    return (
        <section className='w-full min-h-[100dvh] h-[100dvh] relative'>
            <BackgroundVideo />
            <Headline />
            <ShareButtonsContainer />
        </section>
    );
};

export default Hero;