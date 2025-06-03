import UnderlineButton from '@/components/utilities/buttons/UnderlineButton';
import ArticleContainer from '@/components/utilities/containers/ArticleContainer';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'


const Article: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <div className='flex flex-col gap-20'>
            <ArticleContainer 
                title={landingContents[lang]['get-in-touch'].heading}
                description={(
                    <ul className='flex flex-col'>
                        {
                            landingContents[lang]['get-in-touch'].contacts.map(({contact,type}, i) => {
                                return (
                                    <li key={`${contact}-${i}`}>
                                        <span className='opacity-70'>{`${type}:`} </span>{contact}
                                    </li>
                                )
                            })
                        }
                    </ul>
                )}
            />
            <div className='w-fit'>
                <UnderlineButton>
                    {landingContents[lang]['lets-talk-button']}
                </UnderlineButton>
            </div>
        </div>

    );
};

export default Article;