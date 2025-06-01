//elza medium 16 lh 100% tracking-none


import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingXsThick: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h6 
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-medium
                    [--heading-xs-thick-font-size:16px]
                    text-[length:var(--heading-xs-thick-font-size)] 
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

export default HeadingXsThick;