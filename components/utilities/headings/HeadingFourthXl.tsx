//elza regular 32 lh 100% tracking 0%
import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingFourthXl: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h2 
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-normal
                    [--heading-fourth-xl-font-size:32px]
                    text-[length:var(--heading-fourth-xl-font-size)] 
                    leading-[1]
                    tracking-normal
                `,
                className
            )}
            style={style}
        >
            {children}
        </h2>
    );
};

export default HeadingFourthXl;