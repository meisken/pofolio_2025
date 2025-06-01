//elza medium 16 lh 100% tracking-none


import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeaderXsThick: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h6 
            ref={ref}
            className={cn(
                ``,
                className
            )}
            style={style}
        >
            {children}
        </h6>
    );
};

export default HeaderXsThick;