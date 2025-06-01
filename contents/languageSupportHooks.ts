"use client"

import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { supportedLanguages, SupportedLanguages } from "./supportedLanguages";


export const useCurrentLanguages = () => {
    "use client"
    const searchParams = useSearchParams();
    const currentLanguage = searchParams.get('lang');
    return currentLanguage
}

export const UseClientSideLanguageRedirect: () => SupportedLanguages = () => {
    "use client"

    const currentLanguage = useCurrentLanguages();
    const isRequestLanguageSupported = currentLanguage !== null && supportedLanguages.some((language => language === currentLanguage));

    useEffect(() => {
   
        if(!isRequestLanguageSupported){
            redirect("/?lang=en")
        }
    },[isRequestLanguageSupported]);
    const currentLang = isRequestLanguageSupported ? ( currentLanguage as SupportedLanguages ): "en" ;
    return currentLang
 
 
};


