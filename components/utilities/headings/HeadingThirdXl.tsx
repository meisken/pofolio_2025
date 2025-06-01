//acumin-semi-cond bold 28 lh 100% tracking -2%
import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingThirdXl: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h3 
            ref={ref}
            className={cn(
                `
                    font-acumin-semi-cond
                    font-bold
                    [--heading-third-xl-font-size:28px]
                    text-[length:var(--heading-third-xl-font-size)] 
                    leading-[1]
                    tracking-[calc(var(--heading-third-xl-font-size)*-0.02)]
                `,
                className
            )}
            style={style}
        >
            {children}
        </h3>
    );
};

export default HeadingThirdXl;