//acumin medium 24px lh 120% tracking-none

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}

const ParagraphTwiceXl: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p 
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-medium
                    [--paragraph-twice-xl-font-size:clamp(20px,calc(((100vw-1024px)/896*6)+18px),24px)]
                    lg:[--paragraph-twice-xl-font-size:clamp(18px,calc(((100vw-360px)/664*2)+18px),20px)]
                    text-[length:var(--paragraph-twice-xl-font-size)] 
                    leading-[1.2]
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

export default ParagraphTwiceXl;