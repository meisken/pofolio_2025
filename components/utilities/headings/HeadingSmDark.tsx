// Acumin Pro regular 18 lh 100% tracking-none opacity-70

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeaderSmDark: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h5 
            ref={ref}
            className={cn(
                ``,
                className
            )}
            style={style}
        >
            {children}
        </h5>
    );
};

export default HeaderSmDark;