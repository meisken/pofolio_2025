// Acumin Pro regular 18 lh 100% tracking-none opacity-70

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingSmDark: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h5 
            ref={ref}
            className={cn(
                `
                    uppercase
                    font-acumin
                    font-normal
                    [--heading-sm-dark-font-size:clamp(16px,calc(((100vw-1024px)/896*2)+16px),18px)]
                    text-[length:var(--heading-sm-dark-font-size)] 
                    leading-[1]
                    tracking-normal
                    opacity-70
                `,
                className
            )}
            style={style}
        >
            {children}
        </h5>
    );
};

export default HeadingSmDark;