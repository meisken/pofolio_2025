import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, Ref } from 'react'

interface Props{
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLDivElement> | undefined,
    children?: ReactNode,
    dataSpeed?: string
}

const Tag: FC<Props> = ({className,ref,style,children,dataSpeed}) => {
    return (
        <span 
            data-speed={dataSpeed}
            className={cn('bg-primary-dark absolute py-2 px-5 rounded-2xl inline-block',className)} 
            style={style} 
            ref={ref}
        >
            {children}
        </span>
    );
};

export default Tag;