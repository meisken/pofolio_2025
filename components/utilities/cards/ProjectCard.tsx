import { FC } from 'react'
import HeadingThirdXl from '../headings/HeadingThirdXl';
import ParagraphBase from '../paragraphs/ParagraphBase';
import Image from 'next/image';
import Arrow from '../svg/Arrow';

interface Props{
    index?: string,
    description?: string,
    mediaSrc?: string,
    mediaType?: "image" | "video"
}

const ProjectCard: FC<Props> = ({description,index,mediaSrc="",mediaType}) => {
    return (
        <div className='flex flex-col text-black w-full relative'>
            <div className='aspect-[720/384] w-full relative '>
                {
                    mediaSrc === "" ? (<></>) : (
                        mediaType === "image" ? (
                            <Image 
                                src={mediaSrc}
                                alt={mediaSrc}
                                fill
                                objectFit='cover'
                            />
                        ) : (
                            <video 
                                muted
                                playsInline
                                src={mediaSrc}
                                
                                className='w-full h-full object-cover'
                            />
                        )
                    )
                }
            </div>
            <div className='py-4 px-12 flex gap-10 justify-around bg-white'>
                <HeadingThirdXl>{index}</HeadingThirdXl>
                <ParagraphBase className='max-w-[465px]'>
                    {description}
                </ParagraphBase>
            </div>
            <div className='absolute right-0 top-0 mt-6 mr-6'>
                <Arrow />
            </div>
        </div>
    );
};

export default ProjectCard;