import { FC } from 'react'
import Heading from './widget/Heading';
import BackgroundImages from './widget/BackgroundImages';



const FullScreenTransition: FC = () => {
    return (
        <div 
            className='
                w-full 
                h-[calc(var(--dvh)*300)] 
                min-h-[calc(var(--dvh)*300)] 
                origin-[top_center] 
                scale-90 
                portrait:scale-100
            
            '
        >
            <section 
                className='
                    h-[calc(var(--dvh)*100)] 
                    min-h-[calc(var(--dvh)*100)] 
                    w-full 
                    relative 
                    portrait:flex 
                    portrait:flex-col 
                    portrait:gap-6
                    portrait:justify-center
                '
            >
                
                <BackgroundImages />
                <Heading />
            </section>
        </div>
    );
};

export default FullScreenTransition;