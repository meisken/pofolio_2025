"use client"

import { redirect, useSearchParams } from 'next/navigation';
import { useEffect } from 'react'
import { supportedLanguages, SupportedLanguages } from './supportedLanguages';



export const UseSupportedLanguages: () => SupportedLanguages = () => {
    
    const searchParams = useSearchParams();
    const search = searchParams.get('lang');
    const isRequestLanguageSupported = search !== null && supportedLanguages.some((language => language === search));

    useEffect(() => {
   
        if(!isRequestLanguageSupported){
            redirect("/?lang=en")
        }
    },[isRequestLanguageSupported]);
    const currentLang = isRequestLanguageSupported ? ( search as SupportedLanguages ): "en" ;
    return currentLang
 
 
};

