"use client"

import { FC } from 'react'
import Hero from './sections/hero/Hero';
import WhatIDo from './sections/whatIDo/WhatIDo';
import FullScreenTransition from './sections/fullScreenTransition/FullScreenTransition';
import Projects from './sections/projects/Projects';
import Services from './sections/services/Services';
import GetInTouch from './sections/getInTouch/GetInTouch';


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
    
            className={"flex flex-col w-full pb-20"}

        >   
            <Hero />
            <WhatIDo />
            <FullScreenTransition />
            <Projects />
            <Services />
            <GetInTouch />
        </main>
    );
};

export default Landing;