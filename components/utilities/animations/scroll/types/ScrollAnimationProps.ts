import { CSSProperties } from "react";

export interface ScrollAnimationProps {

    scrollTriggerVars?: ScrollTrigger.Vars,
    styleFrom?: CSSProperties,
    styleTo?: CSSProperties,

    splitText?: string | undefined,
    splitTextMode?: "words" | "characters",

    duration?: number,
    ease?: gsap.EaseFunction | "none",
    delay?: number,
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined

    splitTextClassName?: string,
    splitTextStyle?: CSSProperties,

    trigger?: "self" | gsap.DOMTarget | undefined,

    
}