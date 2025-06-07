import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, useEffect, useRef } from 'react';
import gsap, { Cubic } from "gsap"
import { ScrollAnimationProps } from './types/ScrollAnimationProps';
import Image from 'next/image';




interface Props extends ScrollAnimationProps{

    className?: string,
    style?: CSSProperties,

    src: string,
    alt: string,
    sizes?: string
}

const CustomScrollAnimationImage: FC<Props> = ({
    src,
    alt,
    sizes,

    scrollTriggerVars,
    styleTo,
    styleFrom,

    className,
    style,

    stagger,
    delay,
    duration = 1,
    ease = Cubic.easeOut,

    trigger,
    endTrigger
}) => {
    const ImageRef = useRef<HTMLImageElement>(null);



    useEffect(() => {

        let _trigger:  undefined | gsap.DOMTarget = undefined, _endTrigger:  undefined | gsap.DOMTarget = undefined;
        const img = ImageRef.current;
        if(trigger === "self"){
            _trigger = img;
        }else if(trigger !== undefined){
            _trigger = trigger.current;
        }
        if(endTrigger === "self"){
            _endTrigger = img;
        }else if(endTrigger !== undefined){
            _endTrigger = endTrigger.current;
        }


        const ctx = gsap.context(
            () => {
                const tween = gsap.to(img,{
                    ...styleTo,
                    stagger,
                    ease,
                    duration,
                    delay,
                    scrollTrigger: {
                        trigger: _trigger,
                        endTrigger: _endTrigger,
                        ...scrollTriggerVars
                    }
                });
    
                return tween
            }
        )
        return () => {
            ctx.revert();
        }
     
    },[scrollTriggerVars,delay,duration,ease,stagger,styleTo,trigger])


    return (
        <Image
            ref={ImageRef}
            src={src}
            alt={alt}
            sizes={sizes}
            fill
            className={cn("object-cover",className)}
            style={{
                ...styleFrom,
                ...style  
            }}

        />

   
    )
}
export default CustomScrollAnimationImage