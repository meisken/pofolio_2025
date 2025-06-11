import UnderlineButton from '@/components/utilities/buttons/UnderlineButton';
import ArticleContainer from '@/components/utilities/containers/ArticleContainer';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Link from 'next/link';
import { FC } from 'react'


const Article: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <div className='flex flex-col gap-20 '>
            <ArticleContainer 
                scrollTriggerVars={{
                    start: () => "bottom bottom ",
                    end: () => "bottom bottom ",
                }}
                title={landingContents[lang]['get-in-touch'].heading}
                description={(
                    <span className='flex flex-col '>
                        {
                            landingContents[lang]['get-in-touch'].contacts.map(({contact,type}, i) => {
                                return (
                                    <span key={`${contact}-${i}`} className='text-nowrap'>
                                        <span className='opacity-70'>{`${type}:`} </span>{contact}
                                    </span>
                                )
                            })
                        }
                    </span>
                )}
            />
            <div className='w-fit'>
                <Link href={landingContents[lang]['lets-talk-button'].link}>
                    <UnderlineButton>
                        {landingContents[lang]['lets-talk-button'].name}
                    </UnderlineButton>
                </Link>
            </div>
        </div>

    );
};

export default Article;