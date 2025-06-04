//elza regular 90 lh 110% tracking 0%

import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingEighthXl: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h1 
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-normal
                    [--heading-eighth-xl-font-size:clamp(64px,calc(((100vw-1024px)/896*26)+64px),90px)]
                    lg:[--heading-eighth-xl-font-size:clamp(48px,calc(((100vw-360px)/664*16)+48px),64px)]
                    text-[length:var(--heading-eighth-xl-font-size)] 
                    leading-[1.1]
                    tracking-normal

                `,
                className
            )}
            style={style}
        >
            {children}
        </h1>
    );
};

export default HeadingEighthXl;