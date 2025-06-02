"use client"

import { FC } from 'react'
import Hero from './sections/hero/Hero';


const Landing: FC = ({}) => {

    // const pageTransitionContext = usePageTransitionContext();

    // useGSAP((_, contextSafe) => {
    //     pageTransitionContext?.registerAnimationEvent("exitComplete",[
    //         () => {

    //             if(contextSafe){
    //                 const tween = contextSafe(() => {
    //                     return gsap.fromTo(".testing",{
    //                         opacity: 0
    //                     },{
    //                         opacity: 1
    //                     })
    //                 });
    //                 tween()
    //             }
    //         }
    //     ])
    // },{dependencies: [pageTransitionContext]});

    return (
        <main
    
            className={"flex flex-col w-full "}

        >   
            <Hero />

        </main>
    );
};

export default Landing;