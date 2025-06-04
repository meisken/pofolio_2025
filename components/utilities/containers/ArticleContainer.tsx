import { CSSProperties, FC, ReactNode, Ref } from 'react'
import HeadingEighthXl from '../headings/HeadingEighthXl';
import ParagraphFourthXl from '../paragraphs/ParagraphFourthXl';
import { cn } from '@/lib/tailwind/cn';
import Line from '../decorations/Line';

interface Props{
    title?: string,
    description?: string | ReactNode,

    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLElement> | undefined,
}

const ArticleContainer: FC<Props> = ({className,description,ref,style,title}) => {
    return (
        <article className={cn('flex flex-col gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),56px)] max-w-[clamp(520px,calc(((100vw-1024px)/896*255)+520px),775px)]',className)} ref={ref} style={style} >
            <HeadingEighthXl className='relative w-fit'>
                {title}
                <Line className='absolute bottom-0 left-0 right-0' />
            </HeadingEighthXl>
            <ParagraphFourthXl>
                {description}
            </ParagraphFourthXl>
        </article>
    );
};

export default ArticleContainer;