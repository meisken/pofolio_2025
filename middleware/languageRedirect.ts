import { NextRequest, NextResponse } from "next/server";
import { defaultLang, langQueryHeaderName, langUrlQueryName, supportedLanguages, userLastVisitLanguageCookiesName } from "@/contents/supportedLanguagesData";



export const languageRedirect =  (request: NextRequest) => {

    
    const url = request.nextUrl.clone();
    

    const userLangCookies = request.cookies.get(userLastVisitLanguageCookiesName);
    const { nextUrl: { searchParams } } = request;
    const langQuery = searchParams.get(langUrlQueryName);
    
    const getUserLanguagePreferences = () => {
        const userLanguagePreferences = request.headers.get("Accept-Language") ?? "";
        const getTopLanguage = userLanguagePreferences.split(",")[0];
        const matchFistTwoCharacters =  getTopLanguage.match(/^.{2}/);
        const languageCode = matchFistTwoCharacters !== null ? matchFistTwoCharacters[0] : defaultLang;
        return languageCode;
    }

    const setLangCookies = (response: NextResponse<unknown>, lang: string | null) => {
        response.cookies.set(userLastVisitLanguageCookiesName, lang ?? defaultLang, { maxAge: 3600 * 24 * 30 });
    }
    const setLangHeader = (response: NextResponse<unknown>, lang: string | null) => {
        response.headers.set(langQueryHeaderName, lang ?? defaultLang);
    }
    const getIsSupported = (lang: string | null) => {
        return supportedLanguages.some((language => language === lang));
    }
    const setSearchParams = (lang: string | null) => {
        url.searchParams.set(langUrlQueryName, lang ?? defaultLang);
    }

    const updateLangQuery = (_languageCode: string) => {
        let lang = _languageCode;

        const isUserLanguageSupported = getIsSupported(lang);
        if(!isUserLanguageSupported){
            lang = defaultLang;
        }

        setSearchParams(lang);
        let response: NextResponse | undefined = undefined;
        response = NextResponse.redirect(url);

        setLangCookies(response, lang);
        setLangHeader(response, lang);

        return response
    }

    const isLangQuerySupported = getIsSupported(langQuery);

    if(userLangCookies === undefined){
        const languageCode = getUserLanguagePreferences();
        return updateLangQuery(languageCode);
    }
    
    if(!isLangQuerySupported || userLangCookies.value !== langQuery){
        return updateLangQuery(userLangCookies.value);
    }

    const response = NextResponse.next();
    setLangHeader(response, userLangCookies.value);
    return response;
        
 
}