import { CSSProperties, FC, ReactNode, Ref, RefObject, useImperativeHandle, useRef } from 'react'
import HeadingEighthXl from '../headings/HeadingEighthXl';
import ParagraphFourthXl from '../paragraphs/ParagraphFourthXl';
import { cn } from '@/lib/tailwind/cn';
import Line from '../decorations/Line';
import TextRevealScrollAnimation from '../animations/scroll/TextRevealScrollAnimation';
import CustomScrollAnimation from '../animations/scroll/CustomScrollAnimation';

interface Props{
    title?: string,
    description?: string | ReactNode,

    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLElement> | undefined,
    
    customTriggerRef?:  RefObject<HTMLElement | null>,
    scrollTriggerVars?: ScrollTrigger.Vars | undefined
}

const ArticleContainer: FC<Props> = ({className,description,ref,style,title,customTriggerRef,scrollTriggerVars}) => {
    const triggerRef = useRef<HTMLElement>(null);
    useImperativeHandle<(HTMLElement | null), (HTMLElement | null)>(ref, () => triggerRef.current, []);
    return (
        <article 
            className={cn('flex flex-col gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),56px)] max-w-[clamp(520px,calc(((100vw-1024px)/896*255)+520px),775px)]',className)} 
            ref={triggerRef} 
            style={style} 
        >
            <HeadingEighthXl className='relative w-fit'>
                <TextRevealScrollAnimation
                    splitText={title} 
                    splitTextMode='characters' 
                    splitTextClassName='relative inline-block'
                    duration={0.75}
                    stagger={0.025}
                    className='w-fit whitespace-nowrap'

                    trigger={customTriggerRef ?? triggerRef}
                    scrollTriggerVars={{
                        start: () => "top center",
                        end: () => "top center",
                        ...scrollTriggerVars
                    }}
                    
                >
                    {title}
                </TextRevealScrollAnimation>
                <CustomScrollAnimation 
                    styleFrom={{
                        transformOrigin: "center left",
                        transform: "scaleX(0)"
                    }}
                    styleTo={{
                        transform: "scaleX(1)"
                    }}
                    duration={1}

                    trigger={triggerRef}
                    scrollTriggerVars={{
                        start: () => "top center",
                        end: () => "top center",
                        toggleActions: "play none reverse none",
                        ...scrollTriggerVars
                    }}

                    className='absolute bottom-0 left-0 right-0'
                >
                    <Line className='w-full' />
                </CustomScrollAnimation>
                
            </HeadingEighthXl>
            <ParagraphFourthXl>
                
                <TextRevealScrollAnimation
                    splitText={typeof description === "string" ? description : undefined}
                    splitTextMode='words' 
              
                    duration={0.75}
                    stagger={0.025}
               
                    trigger={customTriggerRef ?? triggerRef}
                    scrollTriggerVars={{
                        start: () => "top center",
                        end: () => "top center",
                        toggleActions: "play none reverse none"
                    }}
                >
                    {description}
                </TextRevealScrollAnimation>
            </ParagraphFourthXl>
        </article>
    );
};

export default ArticleContainer;