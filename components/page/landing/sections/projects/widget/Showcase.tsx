import ProjectCard from '@/components/utilities/cards/ProjectCard';
import HeadingSmDark from '@/components/utilities/headings/HeadingSmDark';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { cn } from '@/lib/tailwind/cn';
import { FC } from 'react'


const Showcase: FC = () => {
    const lang = useCurrentLanguages();
    
    return (
        <div 
            className=' 
                [--showcase-container-gap:clamp(32px,calc(((100vw-1024px)/896*32)+32px),64px)]
        
                grid 
                grid-cols-2
                lg:grid-cols-1
                w-full 
                gap-[var(--showcase-container-gap)] 
            '
        >
            {
                landingContents[lang]['projects'].projects.map(({description,videoSrc,caption},i) => {
                    return (
                        <div 
                            key={`project-${i}`} 
                            className={
                                cn(
                                    'w-full  max-w-[720px] flex flex-col gap-4' ,
                                    {
                                        "justify-self-start lg:justify-self-center": i % 2 === 0,
                                        "justify-self-end lg:justify-self-center": !(i % 2 === 0),
                                    }
                                )
                            }
                         
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