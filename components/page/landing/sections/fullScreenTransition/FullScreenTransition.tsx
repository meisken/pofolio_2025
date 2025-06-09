import { FC, useRef } from 'react'
import Heading from './widget/Heading';
import BackgroundImages from './widget/BackgroundImages';
import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import FadeoutBlock from './widget/FadeoutBlock';



const FullScreenTransition: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pinContainerRef = useRef<HTMLElement>(null);
    const fadeOutBlockRef = useRef<HTMLDivElement>(null);
    return (
        <section 
            ref={pinContainerRef}
            className='
                w-full 
                h-[calc(var(--dvh)*300)] 
                min-h-[calc(var(--dvh)*300)] 
                origin-[top_center] 
                overflow-clip
                relative
            '
        >
            <CustomScrollAnimation 
                ease={"none"}
                trigger={pinContainerRef}
                pin={"self"}
                scrollTriggerVars={{
                    start: () => "top top",
                    end: () => `bottom top`,
                    scrub: 0,
                }}
                className='
                    h-[calc(var(--dvh)*100)] 
                    min-h-[calc(var(--dvh)*100)] 
                    w-full 
                '
            >
                <CustomScrollAnimation 
                    ease={"none"}
                    trigger={fadeOutBlockRef}
                    pin={"self"}
                    scrollTriggerVars={{
                        start: () => "top top",
                        end: () => `bottom top`,
                        scrub: 0,
                    }}
                    className='
                        h-full
                        w-full 
                    '
                    styleFrom={{
                        transformOrigin: "top center",
                        transform: "scale(1) translateY(0%)"
                    }}
                    styleTo={{
                        transform: "scale(0.8) translateY(-150%)"
                    }}
                >
                    <div 
                        ref={containerRef}
                        className='
                            w-full
                            h-full
                            relative
                            portrait:flex 
                            portrait:flex-col 
                            portrait:gap-6
                            portrait:justify-center
                        '
                    >
                        <BackgroundImages containerRef={containerRef} pinContainerRef={pinContainerRef} />
                        <Heading />
                    </div>
                </CustomScrollAnimation>
            </CustomScrollAnimation>
            <FadeoutBlock ref={fadeOutBlockRef} />
        </section>
    );
};

export default FullScreenTransition;