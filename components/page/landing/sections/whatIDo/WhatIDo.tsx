import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react'
import Article from './widget/Article';
import ScrollingParallax from './widget/ScrollingParallax';



const WhatIDo: FC = () => {

    return (
        <SectionContainer className='pb-36'>
            <Article />
            <ScrollingParallax />
        </SectionContainer>
    );
};

export default WhatIDo;