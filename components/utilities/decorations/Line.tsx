import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, Ref } from 'react'

interface Props{
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLDivElement> | undefined
}

const Line: FC<Props> = ({className,ref,style}) => {
    return (
        <div className={cn('bg-secondary h-[2px] w-full',className)} style={style} ref={ref}></div>
    );
};

export default Line;