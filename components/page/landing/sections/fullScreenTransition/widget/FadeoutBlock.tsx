import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import { FC, Ref } from 'react'


interface Props{
    ref?: Ref<HTMLDivElement> | undefined
}
const FadeoutBlock: FC<Props> = ({ref}) => {
    return (
        <div ref={ref} className='absolute bottom-0 left-0 right-0 h-[calc(var(--dvh)*100)] min-h-[calc(var(--dvh)*100)] '>
            <CustomScrollAnimation
                className='w-full h-full bg-black'
                ease={"none"}
                trigger="self"
                scrollTriggerVars={{
                    start: () => "top top",
                    end: () => `bottom top`,
                    scrub: 0,
            
                }}
                styleFrom={{
                    opacity: 0
                }}
                styleTo={{
                    opacity: 1
                }}
            >

            </CustomScrollAnimation>
        </div>
    );
};

export default FadeoutBlock;