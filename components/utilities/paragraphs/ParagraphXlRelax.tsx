//acumin regular 18px tracking 2.5 lh 130%

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}

const ParagraphXlRelax: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p 
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-normal
                    [--paragraph-xl-relax-font-size:clamp(18px,calc(((100vw-1024px)/896*4)+18px),22px)]
              
                    text-[length:var(--paragraph-xl-relax-font-size)] 
                    leading-[1.45]
                    tracking-[calc(var(--paragraph-xl-relax-font-size)*0.015)]
                
                `,
                className
            )}
            style={style}
        >
            {children}
        </p>
    );
};

export default ParagraphXlRelax;