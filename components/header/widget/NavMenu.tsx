import HeadingSm from '@/components/utilities/headings/HeadingSm';
import { cn } from '@/lib/tailwind/cn';
import { routes } from '@/routes/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react'

interface Props{
    navMenuActive: boolean
}

const NavMenu: FC<Props> = ({navMenuActive}) => {
    const pathname = usePathname();
    return (
        <nav 
            className='absolute inset-0 z-[-1] pointer-events-auto sm:bottom-auto' 
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                transform: `translateY(${navMenuActive ? '0%' : '-100%'})`,
                transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)"
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
                    sm:shadow-[0px_4px_16px_16px_rgba(0,0,0,0.5)]
                '
            >
                {
                    routes.map(({name,path}) => {
                        const isActive = pathname === path || (pathname.startsWith(path) && path !== "/");
                        return (
                            <Link 
                                key={`${name}${path}`} 
                                href={path}
                                className='sm:w-full sm:inline-block'
                            >
                                <li 
                                    className={
                                        cn(
                                            `
                                                py-[10px] 
                                                px-[22px] 
                                                rounded-[25px] 
                                                sm:text-center 
                                                sm:rounded-none
                                                sm:py-[32px]
                                                sm:px-0
                                                sm:uppercase
                                            `,
                                            {
                                                "bg-primary" : isActive,
                                                "sm:bg-black" : !isActive
                                            }
                                        )
                                    }
                                >
                                    <HeadingSm>
                                        {name}
                                    </HeadingSm>
                                    
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default NavMenu;