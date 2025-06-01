//elza regular 18 lh 100% tracking-none

import { cn } from "@/lib/tailwind/cn";
import { CSSProperties, FC, ReactNode, Ref } from "react";

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLHeadingElement> | undefined
}

const HeadingSm: FC<Props> = ({children, ref, className, style}) => {
    return (
        <h5 
            ref={ref}
            className={cn(
                `
                    font-elza
                    font-normal
                    [--heading-sm-font-size:18px]
                    text-[length:var(--heading-sm-font-size)] 
                    leading-[1]
                    tracking-normal
                `,
                className
            )}
            style={style}
        >
            {children}
        </h5>
    );
};

export default HeadingSm;