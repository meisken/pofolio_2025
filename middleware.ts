import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languageRedirect } from './middleware/languageRedirect';

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
        return NextResponse.next();
    }
    
    return languageRedirect(request)
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}