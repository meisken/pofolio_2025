import { NextRequest, NextResponse } from "next/server";



export const hasVisitedCookie = (request: NextRequest, firstVisitCallback:(setCookies: (response: NextResponse<unknown>) => void ) => void) => {
   
    const hasVisited = request.cookies.has('visited');
    
    const setCookies = (response: NextResponse<unknown>) => {
        response.cookies.set('visited', 'true', { maxAge: 3600 * 24 * 30 });
    }

    if (!hasVisited) {
        firstVisitCallback(setCookies)
    }

    return true
}