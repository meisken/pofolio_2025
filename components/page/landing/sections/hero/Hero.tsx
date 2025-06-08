import { FC } from 'react'
import BackgroundVideo from './widget/BackgroundVideo';
import Headline from './widget/Headline';
import ShareButtonsContainer from './widget/ShareButtonsContainer';


const Hero: FC = () => {
    return (
        <section 
            className='
                w-full 
                min-h-[max(calc(var(--dvh)*100),640px)] 
                h-[calc(var(--dvh)*100)] 
                relative 
                portrait:h-fit 
                portrait:min-h-0
                portrait:pt-[calc(var(--dvh)*20)]
                portrait:flex
                portrait:flex-col
                portrait:gap-10
            '
        > 
            <Headline />
            <BackgroundVideo />
            <ShareButtonsContainer />
        </section>
    );
};

export default Hero;