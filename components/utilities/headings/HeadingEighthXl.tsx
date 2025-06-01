//elza regular 90 lh 110% tracking 0%

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeaderEighthXl: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h1 
            ref={ref}
            className={cn(
                ``,
                className
            )}
            style={style}
        >
            {children}
        </h1>
    );
};

export default HeaderEighthXl;