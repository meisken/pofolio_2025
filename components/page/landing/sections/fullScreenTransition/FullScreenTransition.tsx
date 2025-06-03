import { FC } from 'react'
import Heading from './widget/Heading';
import BackgroundImages from './widget/BackgroundImages';



const FullScreenTransition: FC = () => {
    return (
        <div className='w-full h-[300dvh] min-h-[300dvh] origin-[top_center] scale-90'>
            <section className='h-[100dvh] min-h-[100dvh] w-full relative'>
                <Heading />
                <BackgroundImages />
            </section>
        </div>
    );
};

export default FullScreenTransition;