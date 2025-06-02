import { CSSProperties, FC, ReactNode, Ref } from 'react'
import { cn } from '@/lib/tailwind/cn';

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLDivElement> | undefined,
}


const ThreeDHoverCard: FC<Props> = ({className,ref,style,children}) => {
    return (
        <div className={cn("px-8 py-4 bg-primary-dark perspective-dramatic transform-3d",className)} ref={ref} style={style}>
            {children}
        </div>
    );
};

export default ThreeDHoverCard;