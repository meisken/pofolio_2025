import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react'
import Article from './widget/Article';
import Showcase from './widget/Showcase';



const Projects: FC = () => {
    return (
        <SectionContainer className='flex flex-col gap-20'>
            <Article />
            <Showcase />
        </SectionContainer>
    );
};

export default Projects;