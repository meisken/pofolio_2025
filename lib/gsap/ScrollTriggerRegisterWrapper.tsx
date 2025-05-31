'use client';
import { FC, ReactNode } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props{
    children: ReactNode
}
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerRegisterWrapper: FC<Props> = ({children}) => {
    return (
        <>{children}</>
    );
};

export default ScrollTriggerRegisterWrapper;