import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react'
import Article from './widget/Article';
import Showcase from './widget/Showcase';



const Projects: FC = () => {
    return (
        <SectionContainer className='flex flex-col gap-[clamp(64px,calc(((100vw-768px)/1152*32)+48px),80px)]'>
            <Article />
            <Showcase />
        </SectionContainer>
    );
};

export default Projects;