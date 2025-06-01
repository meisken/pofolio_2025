//elza 80px lh 100% tracking 0%
import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadlineHero: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h6 
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-medium
                    [--headline-hero-font-size:80px]
                    text-[length:var(--headline-hero-font-size)] 
                    leading-[1]
                    tracking-normal
                `,
                className
            )}
            style={style}
        >
            {children}
        </h6>
    );
};

export default HeadlineHero;