import ProjectCard from '@/components/utilities/cards/ProjectCard';
import HeadingSmDark from '@/components/utilities/headings/HeadingSmDark';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'


const Showcase: FC = () => {
    const lang = useCurrentLanguages();
    
    return (
        <div className=' grid grid-cols-[1fr_1fr] w-full gap-[80px] '>
            {
                landingContents[lang]['projects'].projects.map(({description,videoSrc,caption},i) => {
                    return (
                        <div 
                            key={`project-${i}`} 
                            className='w-full  max-w-[720px] flex flex-col gap-4' 
                            style={{justifySelf: i % 2 === 0 ? "start": "end"}}
                        >
                            <HeadingSmDark>{caption}</HeadingSmDark>
                            <ProjectCard 
                                description={description}
                                index={`0${i + 1}.`}
                                mediaSrc={videoSrc}
                                mediaType='video'
                            />
                        </div>
                   
                    )
                })
            }
        </div>
    );
};

export default Showcase;