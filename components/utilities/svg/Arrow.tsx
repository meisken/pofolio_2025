import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, Ref } from 'react'

interface Props{
    className?: string,
    style?: CSSProperties,
    ref?: Ref<SVGSVGElement> | undefined
}

const Arrow: FC<Props> = ({className,ref,style}) => {
    return (
        <svg 
            ref={ref}
            viewBox="0 0 34 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={
                cn("text-white w-[34px] h-[34px]",className)
            }
            style={style}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1058 23.8646C9.81293 23.5717 9.81293 23.0968 10.1058 22.804L21.5534 11.3564L12.7575 11.3564C12.3433 11.3564 12.0075 11.0206 12.0075 10.6064C12.0075 10.1921 12.3433 9.85636 12.7575 9.85636L23.3641 9.85636C23.7783 9.85636 24.1141 10.1921 24.1141 10.6064L24.1141 21.213C24.1141 21.6272 23.7783 21.963 23.3641 21.963C22.9499 21.963 22.6141 21.6272 22.6141 21.213L22.6141 12.417L11.1665 23.8646C10.8736 24.1575 10.3987 24.1575 10.1058 23.8646Z" fill="currentColor"/>
        </svg>

    );
};

export default Arrow;