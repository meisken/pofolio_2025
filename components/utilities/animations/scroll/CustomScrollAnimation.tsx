import SplitText from '@/lib/gsap/SplitText';
import { cn } from '@/lib/tailwind/cn';
import { useGSAP } from '@gsap/react';
import { CSSProperties, FC, ReactNode, useRef } from 'react';
import gsap from "gsap"



export interface MaskAndMoveLandingAnimationProps {

    scrollTriggerVars?: ScrollTrigger.Vars,
    styleFrom?: CSSProperties,
    styleTo?: CSSProperties,

    splitText?: string | undefined,
    splitTextMode?: "words" | "characters",
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined

    splitTextClassName?: string,
    splitTextStyle?: CSSProperties,

    trigger?: "self" | gsap.DOMTarget | undefined,
}
interface Props extends MaskAndMoveLandingAnimationProps{
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

    splitTextClassName,
    splitTextStyle,

    trigger
}) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const characterRefs = useRef<(HTMLSpanElement | null)[][]>([[]]);

    useGSAP(() => {
        const elements = isSplitTextDisabled ? containerRef.current : characterRefs.current.flat();
        const _trigger = trigger === "self" ? { trigger: containerRef.current } : {};
        const tween = gsap.to(elements,{
            ...styleTo,
            stagger,
            scrollTrigger: {
                ..._trigger,
                ...scrollTriggerVars
            }
        });
        return tween

    },{scope: containerRef, dependencies: [
        scrollTriggerVars
    ]});

    const isSplitTextDisabled = splitText === undefined ;

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