"use client"
import About from '@/components/page/about/About';
import { UseClientSideLanguageRedirect } from '@/contents/languageSupportHooks';
import { FC } from 'react'


const Page: FC = () => {
    UseClientSideLanguageRedirect();
    return (
        <About />
    )
};

export default Page;