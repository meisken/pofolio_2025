import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, MouseEventHandler, Ref } from 'react'

interface Props{
    children?: string,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLButtonElement> | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const UnderlineButton: FC<Props> = ({className,onClick,ref,style,children}) => {
    return (
        <button 
            onClick={onClick} 
            style={style} 
            ref={ref} 
            className={
                cn(
                    `
                        font-acumin 
                        font-normal
                        [--underline-button-font-size:18px]
                        text-[length:var(--underline-button-font-size)] 
                        leading-[1.2] 
                        tracking-[calc(var(--underline-button-font-size)*-0.02)]
                        relative
                        cursor-pointer
                        group
                     
                    `,
                    className
                )
            }
        >
            {children}
            <div 
                className='
                    absolute 
                    top-[calc(100%-1px)] 
                    bottom-0 
                    left-0 
                    right-[50%] 
                    bg-white 
                    group-hover:right-0  

                ' 
                style={{transition: "all 0.3s linear"}}
            ></div>
        </button>
    );
};

export default UnderlineButton;