import SplitText from '@/lib/gsap/SplitText';
import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, ReactNode, useEffect, useRef } from 'react';
import gsap, { Cubic } from "gsap"
import { ScrollAnimationProps, SplitTextProps } from './types/ScrollAnimationProps';




interface Props extends ScrollAnimationProps, SplitTextProps{
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
}

const CustomScrollAnimation: FC<Props> = ({
    children, 

    scrollTriggerVars,
    styleTo,
    styleFrom,

    className,
    style,

    splitText,
    splitTextMode,

    stagger,
    delay,
    duration = 1,
    ease = Cubic.easeOut,

    splitTextClassName,
    splitTextStyle,

    trigger,
    endTrigger,
    pin
}) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const characterRefs = useRef<(HTMLSpanElement | null)[][]>([[]]);

    const isSplitTextDisabled = splitText === undefined ;

    useEffect(() => {

        const elements = isSplitTextDisabled ? containerRef.current : characterRefs.current.flat();
        let _trigger:  undefined | gsap.DOMTarget = undefined, 
            _endTrigger:  undefined | gsap.DOMTarget = undefined,
            _pin:  boolean | gsap.DOMTarget | undefined = pin;

        if(trigger === "self"){
            _trigger = containerRef.current;
        }else if(trigger !== undefined){
            _trigger = trigger.current;
        }

        if(endTrigger === "self"){
            _endTrigger = containerRef.current;
        }else if(endTrigger !== undefined){
            _endTrigger = endTrigger.current;
        }

        if(pin === "self"){
            _pin = containerRef.current;
        }
        const ctx = gsap.context(
            () => {
                const tween = gsap.to(elements,{
                    ...styleTo,
                    stagger,
                    ease,
                    duration,
                    delay,
                    scrollTrigger: {
                        trigger: _trigger,
                        endTrigger: _endTrigger,
                        pin: _pin,
                        ...scrollTriggerVars
                    }
                });
    
                return tween
            }
        )
        return () => {
            ctx.revert();
        }
     
    },[scrollTriggerVars,delay,duration,ease,stagger,styleTo,trigger,isSplitTextDisabled,endTrigger,pin])


    return (
        <span 
            ref={containerRef} 
            className={
                cn(
                    "inline-block transform-3d",
                    className
                )
            }
            style={
                isSplitTextDisabled ? {
                    ...styleFrom,
                    ...style  
                } : style
            }
        >
            {
                isSplitTextDisabled ? (
                        <>{children}</>
                    ) : (
                        <SplitText 
                            text={splitText}
                            splitTextMode={splitTextMode}
                            ref={characterRefs}
                            style={{
                                ...styleFrom,
                                ...splitTextStyle
                            }}
                            className={splitTextClassName}
                        />
                    ) 
            }
        </span>
    )
}
export default CustomScrollAnimation