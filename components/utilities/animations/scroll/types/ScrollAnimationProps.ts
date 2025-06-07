import { CSSProperties, RefObject } from "react";

export interface SplitTextProps{
    splitText?: string | undefined,
    splitTextMode?: "words" | "characters",
    splitTextClassName?: string,
    splitTextStyle?: CSSProperties,
}
export interface ScrollAnimationProps {

    scrollTriggerVars?: ScrollTrigger.Vars,
    styleFrom?: CSSProperties,
    styleTo?: CSSProperties,


    duration?: number,
    ease?: gsap.EaseFunction | "none",
    delay?: number,
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined



    trigger?: "self" | RefObject<HTMLElement | null> | undefined,

    
}