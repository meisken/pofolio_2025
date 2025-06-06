import { CSSProperties, FC, MouseEventHandler, ReactNode, Ref, useImperativeHandle, useRef } from 'react'
import { cn } from '@/lib/tailwind/cn';

interface Props{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLDivElement> | undefined,

    innerDivClassName?: string
    innerDivStyle?: CSSProperties

    zDepth?: number,
    rotateFactor?: number,
    background?: string
}


const ThreeDHoverCard: FC<Props> = ({                                                                
    className,
    innerDivClassName,
    innerDivStyle,
    ref,
    style,
    children,
    zDepth = 70,
    rotateFactor = 40,
    background = "#151718"
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const onMouseMoveHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        const container = containerRef.current;
        if(container){
            const { top, left, width, height } = container.getBoundingClientRect();
            const x = e.clientX - left - ( width / 2 );
            const y = e.clientY - top - ( height / 2 );

            const rotateX = ( y / height ) * (rotateFactor * -1);
            const rotateY = ( x / width ) * rotateFactor;
            container.style.transformStyle = "preserve-3d"
            container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }
    }
    const onMouseLeaveHandler:  MouseEventHandler<HTMLDivElement> = () => {
        const container = containerRef.current;
        if(container){
          
            container.style.transform = `perspective(100000px) rotateX(0deg) rotateY(0deg)`
        }
    }
    useImperativeHandle<(HTMLDivElement | null), (HTMLDivElement | null)>(ref, () => containerRef.current, []);
    return (
        <div 
            className={
                cn(
                    "px-8 py-4 bg-primary-dark relative",
                    className
                )
            } 
            onMouseLeave={onMouseLeaveHandler}
            onMouseMove={onMouseMoveHandler}
            style={style}
        >
            <div 
              
                ref={containerRef} 
                className={cn(" rounded-[4px]",innerDivClassName)}
                style={{
                    background,
                    boxShadow: "0px 0px 32px 16px rgba(0, 0, 0, 0.4)",
                    transform: `translateZ(${zDepth}px)`,
                    transition: "transform 0.1s linear",
                    ...innerDivStyle
                }}
            >
                {children}
            </div>
            
        </div>
    );
};

export default ThreeDHoverCard;