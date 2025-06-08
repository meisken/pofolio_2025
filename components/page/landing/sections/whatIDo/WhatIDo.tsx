import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC, useRef } from 'react'
import Article from './widget/Article';
import ScrollingParallax from './widget/ScrollingParallax';



const WhatIDo: FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    return (
        <SectionContainer className='pb-36 ' ref={containerRef}>
            <Article containerRef={containerRef} />
            <ScrollingParallax  containerRef={containerRef} />
        </SectionContainer>
    );
};

export default WhatIDo;