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
            className='absolute inset-0 z-[-1] ' 
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                transform: `translateY(${navMenuActive ? '0%' : '-100%'})`,
                transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)"
            }}
        >
            <ul className='flex justify-center items-center gap-[8px] h-full'>
                {
                    routes.map(({name,path}) => {
                        const isActive = pathname === path || (pathname.startsWith(path) && path !== "/");
                        return (
                            <Link 
                                key={`${name}${path}`} 
                                href={path}
                                
                            >
                                <li 
                                    className={
                                        cn(
                                            'py-[14px] px-[22px] rounded-[24px]',
                                            {
                                                "bg-primary" : isActive
                                            }
                                        )
                                    }
                                >
                                    {name}
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