"use client"

import Landing from "@/components/page/landing/Landing";
import { UseClientSideLanguageRedirect } from "@/contents/languageSupportHooks";
import SmoothScrollRegisterContextProvider from "@/lib/gsap/SmoothScrollRegisterContextProvider";



export default function Home() {
    UseClientSideLanguageRedirect();

    return (
        <SmoothScrollRegisterContextProvider>
            <Landing />
        </SmoothScrollRegisterContextProvider>
    );
}
