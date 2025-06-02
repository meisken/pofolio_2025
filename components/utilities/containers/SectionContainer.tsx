import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLElement> | undefined,

}

const SectionContainer: FC<Props> = ({children,className,ref,style}) => {
    return (
        <section className={cn('px-32 mt-32 w-full',className)} ref={ref} style={style}>
            {children}
        </section>
    );
};

export default SectionContainer;