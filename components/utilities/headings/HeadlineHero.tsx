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
                ``,
                className
            )}
            style={style}
        >
            {children}
        </h6>
    );
};

export default HeadlineHero;