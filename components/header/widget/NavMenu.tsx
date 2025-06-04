"use client"
import HeadingSm from '@/components/utilities/headings/HeadingSm';
import { cn } from '@/lib/tailwind/cn';
import { routes } from '@/routes/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, FC, SetStateAction } from 'react'

interface Props{
    navMenuActive: boolean,
    SetNavMenuActive: Dispatch<SetStateAction<boolean>>
}

const NavMenu: FC<Props> = ({navMenuActive,SetNavMenuActive}) => {
    const pathname = usePathname();
    return (
        <nav 
            className={
                cn(
                    'absolute inset-0 z-[-1] pointer-events-auto sm:bottom-auto  sm:h-[calc(var(--dvh)*100)] sm:bg-primary-dark',
                    {
                        "translate-y-0 sm:translate-x-0" : navMenuActive,
                        "-translate-y-full sm:translate-y-0 sm:translate-x-full": !navMenuActive
                    } 
                )
            }
            style={{
            
          
                transition: "all 0.6s cubic-bezier(0.33, 1, 0.68, 1)"
            }}
        >
            <ul 
                className='
                    flex 
                    justify-center 
                    items-center 
                    gap-[0.5rem] 
                    h-full 
                    sm:justify-center 
                    sm:flex-col 
                    sm:w-full 
                    sm:gap-0
                '
            >
                {
                    routes.map(({name,path}) => {
                        const isActive = pathname === path || (pathname.startsWith(path) && path !== "/");
                        return (
                          
                                <li 
                                    key={`${name}${path}`} 
                                    className='sm:w-full sm:inline-block'
        
                                >
                                    <Link 
                                        href={path}
                                        onClick={() => {SetNavMenuActive(false)}}
                                        className={
                                            cn(
                                                `
                                                    inline-block
                                                    
                                                    mx-[22px] 

                                                    sm:text-center 
                                                    sm:flex
                                                    sm:justify-center
                                                    sm:py-[32px]
                                                    sm:w-full
                                                    sm:mx-0
                                                    sm:uppercase
                                                    
                                                `
                                                
                                            )
                                        }
                                        style={{
                                            transition: "background-color 0.3s linear"
                                        }}
                                    >
                                        <HeadingSm className='relative w-fit'>
                                            {name}
                                            {
                                                isActive ? (
                                                    <div
                                                        className='
                                                            absolute
                                                            top-full
                                                            left-[-1px]
                                                            right-[-1px]
                                                            h-[2px]
                                                            bg-secondary
                                                        '
                                                    ></div>
                                                ) : (<></>)
                                            }
                                        </HeadingSm>
                                    
                                    </Link>
                                </li>
                            
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default NavMenu;