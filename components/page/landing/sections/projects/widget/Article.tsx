import ArticleContainer from '@/components/utilities/containers/ArticleContainer';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import { FC } from 'react'


const Article: FC = () => {
    const lang = useCurrentLanguages();
    return (
        <ArticleContainer 
            title={landingContents[lang]['projects'].heading}
            description={landingContents[lang]['projects'].description}
        />
    );
};

export default Article;