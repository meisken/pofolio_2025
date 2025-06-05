import SplitText from '@/lib/gsap/SplitText';
import { cn } from '@/lib/tailwind/cn';
import { useGSAP } from '@gsap/react';
import { CSSProperties, FC, ReactNode, useRef } from 'react';
import gsap from "gsap"


type Coordinates = {
    x?: string,
    y?: string,
    z?: string
}

export interface MaskAndMoveLandingAnimationProps {

    clipPath?: {
        from: string,
        to: string
    },
    scale?: {
        from: Coordinates,
        to: Coordinates
 
    },
    position?: {
        from: Coordinates,
        to: Coordinates
    },
    rotate?: {
        from: Coordinates,
        to: Coordinates
    },
    opacity?: {
        from: number,
        to: number
    },
    perspective?: {
        from: string,
        to: string
    },
    filter?: {
        from: string,
        to: string
    },
    pin?: boolean,

    scrollTriggerVars?: ScrollTrigger.Vars,

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

const getTransform = (scale?: Coordinates, position?: Coordinates, rotate?: Coordinates, perspective?: string) => {
    let transformString = "";

    if(perspective !== undefined && perspective !== ""){
        transformString += ` perspective(${perspective})`
    }

    if(
        position !== undefined && (
            position.x !== undefined || 
            position.y !== undefined || 
            position.z !== undefined
        )

    ){
        transformString += ` translate3d(${position.x ?? "0px"}, ${position.y ?? "0px"}, ${position.z ?? "0px"})`
    }

    if(
        scale !== undefined && (
            scale.x !== undefined || 
            scale.y !== undefined || 
            scale.z !== undefined
        )
        
    ){
        transformString += ` scale3d(${scale.x ?? "1"}, ${scale.y ?? "1"}, ${scale.z ?? "1"})`
    }

    if(
        scale !== undefined && (
            scale.x !== undefined || 
            scale.y !== undefined || 
            scale.z !== undefined
        )
        
    ){
        transformString += ` scale3d(${scale.x ?? "1"}, ${scale.y ?? "1"}, ${scale.z ?? "1"})`
    }
    if(rotate !== undefined){
        if(rotate.x){
            transformString += ` rotateX(${rotate.x})`
        }
        if(rotate.y){
            transformString += ` rotateY(${rotate.y})`
        }
        if(rotate.z){
            transformString += ` rotateZ(${rotate.z})`
        }
    }
    return transformString !== "" ? {
        transform: transformString
    } : {}
    
};
const getStyleProperty = (key: string, value?: string | number | undefined) => {
    if(value !== undefined){
        return {
            [key]: value
        }
    }else{
        return {}
    }
}
const GeneralScrollAnimation: FC<Props> = ({
    children, 


    opacity,
    clipPath,
    position,
    scale,
    rotate,
    perspective,
    filter,
    pin,

    scrollTriggerVars,

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
            ...getTransform(scale?.to,position?.to,rotate?.to,perspective?.to),
            ...getStyleProperty("clipPath",clipPath?.to),
            ...getStyleProperty("opacity", opacity?.to),
            ...getStyleProperty("filter", filter?.to),
            stagger,
            scrollTrigger: {
                ..._trigger,
                ...scrollTriggerVars
            }
        });
        return tween

    },{scope: containerRef, dependencies: [
        opacity,
        clipPath,
        position,
        scale,
        pin,
        scrollTriggerVars
    ]});




    const initStyle: CSSProperties = {
        ...getTransform(scale?.from,position?.from,rotate?.from,perspective?.from),
        ...getStyleProperty("clipPath",clipPath?.from),
        ...getStyleProperty("opacity", opacity?.from),
        ...getStyleProperty("filter", filter?.from),
    }
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
                    ...initStyle,
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
                                ...initStyle,
                                ...splitTextStyle
                            }}
                            className={splitTextClassName}
                        />
                    ) 
            }
        </span>
    )
}
export default GeneralScrollAnimation