"use client"
import SpacingLgContainer from '@/components/utilities/containers/SpacingLgContainer';
import { FC } from 'react'
import Headline from './widget/Headline';
import Article from './widget/Article';
import HeroImage from './widget/HeroImage';



const About: FC = () => {
    return (
        <SpacingLgContainer 
            className='
                relative 
                flex 
                flex-col 
                justify-between 
                pt-24
                pb-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)] 
                h-[calc(var(--dvh)*100)] 
                sm:portrait:justify-start
                sm:portrait:h-auto
            '
        >
            <Headline />
            <HeroImage />
            <Article />
        
        </SpacingLgContainer>
    );
};

export default About;