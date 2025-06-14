//acumin regular 18px tracking 2.5 lh 130%

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}

const ParagraphBaseRelax: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p 
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-normal
                    [--paragraph-base-relax-font-size:18px]
                    
                    text-[length:var(--paragraph-base-relax-font-size)] 
                    leading-[1.45]
                    tracking-[calc(var(--paragraph-base-relax-font-size)*0.025)]
                    sm:[--paragraph-base-relax-font-size:16px]
                    sm:leading-[1.4]
                    sm:tracking-[calc(var(--paragraph-base-relax-font-size)*0.03)]
                `,
                className
            )}
            style={style}
        >
            {children}
        </p>
    );
};

export default ParagraphBaseRelax;