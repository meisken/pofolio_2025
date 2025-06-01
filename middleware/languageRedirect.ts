import { NextRequest, NextResponse } from "next/server";
import { hasVisitedCookie } from "./hasVisitedCookie";
import { langQueryHeaderName, supportedLanguages } from "@/contents/supportedLanguagesData";

export const languageRedirect =  (request: NextRequest) => {

    const url = request.nextUrl.clone();
    let response: NextResponse | undefined = undefined;

    const updateLangQuery = () => {

        const userLanguagePreferences = request.headers.get("Accept-Language") ?? "";
        const getTopLanguage = userLanguagePreferences.split(",")[0];
        const matchFistTwoCharacters =  getTopLanguage.match(/^.{2}/);
        const languageCode = matchFistTwoCharacters !== null ? matchFistTwoCharacters[0] : "en";
        const isUserLanguageSupported = supportedLanguages.some((language => language === languageCode));

        if(isUserLanguageSupported){
            url.searchParams.set("lang",languageCode);
        }else{
            url.searchParams.set("lang","en");
        }
        response = NextResponse.redirect(url);
    
    }

    const hasVisited =  hasVisitedCookie(request, (setCookies) => {
        //if it have not been visited callback
        updateLangQuery();
        if(response){
            setCookies(response);
        }
      
    });

    const { nextUrl: { searchParams } } = request;
    const langQuery = searchParams.get("lang");
    const isLangQuerySupported = supportedLanguages.some((language => language === langQuery));
    
    if(!isLangQuerySupported && hasVisited){
        updateLangQuery();
    }

    if(response === undefined){
        response = NextResponse.next()
    }
    response.headers.set(langQueryHeaderName,langQuery ?? "en")
    return response
}