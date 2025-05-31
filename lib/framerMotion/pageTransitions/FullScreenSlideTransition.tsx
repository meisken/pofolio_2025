"use client"

import { FC } from 'react'
import { motion, Variants } from "framer-motion"
import { PageTransitionProps } from './types/PageTransitionProps'




const slideInVariants: Variants = {
    initial: { 
        scaleY: 0
    },
    // animate: { 
    //    scaleY: 0
    // },
    exit: { 
        scaleY: 1,
        transition: {
            duration: 0.75,
            ease: [0.33, 1, 0.68, 1]
        }
    },
}

const slideOutVariants: Variants = {
     initial: { 
        scaleY: 1
    },
    // animate: { 
    //      scaleY: 1
    // },
    exit: { 
        scaleY: 0,
        transition: {
            duration: 0.75,
            delay: 0.75,
            ease: [0.33, 1, 0.68, 1]
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

const FullScreenSlideTransition: FC<PageTransitionProps> = ({children, onAnimationStart = () => {}, onAnimationEnd = () => {}}) => {


    return (
        <>

            <motion.div 
                onAnimationComplete={onAnimationEnd}
                {...anim(slideOutVariants)}
                className='fixed top-0 left-0 right-0 w-screen h-screen pointer-events-none  z-10 origin-top'
            >

                <motion.div
                    {...anim(slideInVariants)}
                    onAnimationStart={onAnimationStart}
                
                    className='absolute inset-0 bg-black origin-bottom'
                ></motion.div>
            </motion.div>
       
      
            {children}
         

        </>
    );
};

export default FullScreenSlideTransition;