import type { Metadata } from "next";
import "../style/globals.css";
import GsapPluginRegisterWrapper from "@/lib/gsap/GsapPluginRegisterWrapper";
import AnimatePresenceContextProvider from "@/lib/framerMotion/AnimatePresenceContextProvider";
import { headers } from "next/headers";
import { langQueryHeaderName } from "@/contents/supportedLanguagesData";
import FixedHeader from "@/components/header/FixedHeader";
import BlankLoadingContextProvider from "@/components/loader/BlankLoadingContextProvider";
import SplashCursor from "@/components/utilities/cursons/SplashCursor";
import { metadataTags } from "@/metadatas/metadata";


export const metadata: Metadata = metadataTags;

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode; 
}>) {
    const headerList = await headers();
    const lang = headerList.get(langQueryHeaderName) ?? "en";
    return (
        <html lang={lang} >
            <body>
                <BlankLoadingContextProvider>
                    <FixedHeader />
                    <SplashCursor />
                    <GsapPluginRegisterWrapper>
                        <AnimatePresenceContextProvider pageTransitionType="FullScreenSlide" mode="popLayout">
                            {children}
                        </AnimatePresenceContextProvider>
                    </GsapPluginRegisterWrapper>
                </BlankLoadingContextProvider>
            </body>
        </html>
    );
}
