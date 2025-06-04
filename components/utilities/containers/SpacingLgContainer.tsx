import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLElement> | undefined,

}

const SpacingLgContainer: FC<Props> = ({children,className,ref,style}) => {
    return (
        <section 
            className={
                cn(
                    `
                        px-[clamp(40px,calc(((100vw-1024px)/896*24)+40px),64px)]
                        lg:px-[clamp(16px,calc(((100vw-360px)/664*24)+16px),40px)]
                        w-full
                    `,
                    className
                )
            } 
            ref={ref} 
            style={style}
        >
            {children}
        </section>
    );
};

export default SpacingLgContainer;