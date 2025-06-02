"use client"

import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { defaultLang, langUrlQueryName, supportedLanguages, SupportedLanguages } from "./supportedLanguagesData";


export const useCurrentLanguages: () => SupportedLanguages = () => {
    const searchParams = useSearchParams();
    const currentLanguage = searchParams.get(langUrlQueryName);
    const isCurrentLanguageSupported = currentLanguage !== null && supportedLanguages.some((language => language === currentLanguage));
    return (isCurrentLanguageSupported ? currentLanguage : defaultLang) as SupportedLanguages; 
}

export const UseClientSideLanguageRedirect: () => SupportedLanguages = () => {
    const currentLanguage = useCurrentLanguages();
    const isRequestLanguageSupported = currentLanguage !== null && supportedLanguages.some((language => language === currentLanguage));

    useEffect(() => {
   
        if(!isRequestLanguageSupported){
            redirect(`/?${langUrlQueryName}=${defaultLang}`);
        }
    },[isRequestLanguageSupported]);
    const currentLang = isRequestLanguageSupported ? ( currentLanguage as SupportedLanguages ): defaultLang;
    return currentLang
 
};


