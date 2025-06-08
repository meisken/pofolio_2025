//acumin regular 18px tracking 0 lh 100%
import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLParagraphElement> | undefined
}

const ParagraphXs: FC<Props> = ({children, ref, className, style}) => {
    return (
        <p 
            ref={ref}
            className={cn(
                `
                    font-acumin
                    font-light
                    [--paragraph-xs-font-size:16px]
                    sm:[--paragraph-xs-font-size:14px]
                    text-[length:var(--paragraph-xs-font-size)] 
                    leading-[1.5]
                    tracking-[calc(var(--paragraph-xs-font-size)*0.05)]
                `,
                className
            )}
            style={style}
        >
            {children}
        </p>
    );
};

export default ParagraphXs;