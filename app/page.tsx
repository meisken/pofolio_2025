"use client"

import Landing from "@/components/page/landing/Landing";
import { UseClientSideLanguageRedirect } from "@/contents/languageSupportHooks";



export default function Home() {
    UseClientSideLanguageRedirect();

    return (<Landing />);
}
