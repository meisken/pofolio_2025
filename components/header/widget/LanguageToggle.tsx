"use client"
import HeadingXsThick from '@/components/utilities/headings/HeadingXsThick';
import ChevronUp from '@/components/utilities/svg/ChevronUp';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { langUrlQueryName, SupportedLanguages, supportedLanguages, userLastVisitLanguageCookiesName } from '@/contents/supportedLanguagesData';
import { setCookie } from '@/function/client/cookies';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import { cn } from '@/lib/tailwind/cn';
import { FC, MouseEvent, useRef, useState } from 'react'



const LanguageToggle: FC = () => {
 
    const currentLang = useCurrentLanguages();

    const [active, setActive] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
  

    const handleLinkOnClick = (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, lang: SupportedLanguages) => {
        setCookie(userLastVisitLanguageCookiesName, lang);
        setActive(false);
        if(window !== undefined){
            const { origin, pathname} = window.location;
            window.location.href = `${origin}/${pathname}/?${langUrlQueryName}=${lang}`
        }

    }
    const handleMenuToggle = () => {
        setActive(old => !old);
    }
    useOutsideAlerter(containerRef, () => {
        if(active){
            setActive(false);
        }
    },[active]);
    return (
        <div className='cursor-pointer relative uppercase' ref={containerRef}>
            <div className='flex items-center gap-[4px]' onClick={handleMenuToggle}>
                <HeadingXsThick className=''>
                    {currentLang}
                </HeadingXsThick>
                <ChevronUp />
            </div>
            <ul 
                className='
                    absolute 
                    top-[calc(100%+16px)] 
                    left-1/2 
                    -translate-x-1/2 
                ' 
                style={{
                    clipPath: active ? "inset(0% 0% -1% 0%)" : "inset(0% 0% 101% 0%)",
                    transition: "clip-path 0.6s cubic-bezier(0.33, 1, 0.68, 1)"
                }}  
            >
                {
                    supportedLanguages.map((lang,i) => {
                        return (
                            <li 
                                key={`${lang}-${i}`} 
                        
                            >
                                <span 
                               
                                    onClick={(e) => handleLinkOnClick(e,lang)}
                                    className={
                                        cn(
                                            `
                                                inline-block
                                                px-[14.25px] 
                                                py-[10px]
                                                bg-black
                                           
                                            `,
                                            {
                                                "bg-primary": currentLang === lang
                                            }
                                        )
                                    }
                                    style={{
                                        transition: "background-color 0.3s linear"
                                    }}
                                >
                                    <HeadingXsThick>
                                        {lang}
                                    </HeadingXsThick>
                                </span>
                            
                                
                            </li>
                        
                        )
                    })
                }
        
            </ul>
        </div>
       
    );
};

export default LanguageToggle;