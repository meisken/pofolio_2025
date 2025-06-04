import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react'
import Article from './widget/Article';
import HandImage from './widget/HandImage';


const GetInTouch: FC= () => {
    return (
        <SectionContainer className='relative '>
            <Article />
            <HandImage />
        </SectionContainer>
    );
};

export default GetInTouch;