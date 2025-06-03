//acumin Semibold 42px tracking 0 lh 120%

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}

const ParagraphFourthXl: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p 
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-semibold
                    [--paragraph-fourth-xl-font-size:42px]
                    text-[length:var(--paragraph-fourth-xl-font-size)] 
                    leading-[1.1]
                    tracking-[0]
                `,
                className
            )}
            style={style}
        >
            {children}
        </p>
    );
};

export default ParagraphFourthXl;