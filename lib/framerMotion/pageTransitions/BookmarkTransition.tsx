"use client"

import { FC, useRef } from 'react'
import { motion, Variants } from "framer-motion"
import { PageTransitionProps } from './types/PageTransitionProps'




const slideVariants: Variants = {
    initial: { 
        top: "100vh" 
    },
    // animate: { 
    //     top: "100vh" 
    // },
    exit: { 
        top: "0vh",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    },
}

const perspectiveVariants: Variants = {
    initial: { 
        y: 0,
        scale: 1,
        opacity: 1,
     
    },
    // animate: { 
    //     y: 0,
    //     scale: 1,
    //     opacity: 1,
        
    // },
    exit: { 
        y: -100,
        scale: 0.7,
        opacity: 0.5,
      
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
        }
    },

}

const anim = (variants: Variants) => {
    return {
        initial: "initial",
        // animate: "enter",
        exit: "exit",
        variants
    }
}

const BookmarkTransition: FC<PageTransitionProps> = ({children, onAnimationStart = () => {}, onAnimationEnd = () => {}}) => {

    const perspectiveWrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-black">

            <motion.div 
                className='fixed top-0 left-0 right-0 h-[100calc(var(--dvh)*100)] pointer-events-none overflow-clip z-10'
            >

                <motion.div
                    {...anim(slideVariants)}
                    onAnimationStart={onAnimationStart}
                    onAnimationComplete={onAnimationEnd}
                    className='absolute  left-0 right-0  w-screen h-[100calc(var(--dvh)*100)] bg-white'
                ></motion.div>

            </motion.div>

            <motion.div 
                {...anim(perspectiveVariants)}
                ref={perspectiveWrapperRef}
                className='origin-top bg-white'
            >
                {children}
            </motion.div>

        </div>
    );
};

export default BookmarkTransition;