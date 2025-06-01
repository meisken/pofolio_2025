"use client"

import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { defaultLang, langUrlQueryName, supportedLanguages, SupportedLanguages } from "./supportedLanguagesData";


export const useCurrentLanguages = () => {
    const searchParams = useSearchParams();
    const currentLanguage = searchParams.get(langUrlQueryName);
    return currentLanguage;
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


