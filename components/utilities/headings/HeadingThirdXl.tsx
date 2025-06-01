//acumin-semi-cond bold 28 lh 100% tracking -2%
import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeaderThirdXl: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h3 
            ref={ref}
            className={cn(
                ``,
                className
            )}
            style={style}
        >
            {children}
        </h3>
    );
};

export default HeaderThirdXl;