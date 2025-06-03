import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react'
import Article from './widget/Article';
import ServiceList from './widget/ServiceList';


const Services: FC = () => {
    return (
        <SectionContainer className='flex flex-col gap-20'>
            <Article />
            <ServiceList />
        </SectionContainer>
    );
};

export default Services;