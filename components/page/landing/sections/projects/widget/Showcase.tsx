import CustomScrollAnimation from '@/components/utilities/animations/scroll/CustomScrollAnimation';
import TextRevealScrollAnimation from '@/components/utilities/animations/scroll/TextRevealScrollAnimation';
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
                landingContents[lang]['projects'].projects.map(({description,videoSrc,caption,projectLink},i) => {
                    return (
                        <div

                            key={`project-${i}`} 
                            className={
                                cn(
                                    'w-full  max-w-[720px] flex flex-col gap-4 overflow-auto' ,
                                    {
                                        "justify-self-start lg:justify-self-center": i % 2 === 0,
                                        "justify-self-end lg:justify-self-center": !(i % 2 === 0),
                                    }
                                )
                            }
                    
                        >
                      

                            <TextRevealScrollAnimation
                                scrollTriggerVars={{
                                    start: () => `center bottom`,
                                    end: () => `center bottom`,
                                }}
                      
                                trigger={"self"}
                            >
                                <HeadingSmDark>{caption}</HeadingSmDark>
                            </TextRevealScrollAnimation>
                            
                            <CustomScrollAnimation
                                scrollTriggerVars={{
                                    start: () => `center bottom`,
                                    end: () => `center bottom`,
                                }}
                                duration={0.75}
                                trigger={"self"}
                                
                                styleFrom={{
                                    opacity: 0,
                                    scale: 0.9
                        
                                }}
                                styleTo={{
                                    opacity: 1,
                                    scale: 1
                                }}
                            >
                                <ProjectCard 
                                    projectLink={projectLink}
                                    description={description}
                                    index={`0${i + 1}.`}
                                    mediaSrc={videoSrc}
                                    mediaType='image'
                                />
                            </CustomScrollAnimation>
                          
                        </div>
                   
                    )
                })
            }
        </div>
    );
};

export default Showcase;