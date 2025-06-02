import FacebookShareButton from '@/components/utilities/buttons/FacebookShareButton';
import TwitterShareButton from '@/components/utilities/buttons/TwitterShareButton';
import UnderlineButton from '@/components/utilities/buttons/UnderlineButton';
import { useUrl } from '@/hooks/useUrl';
import { FC } from 'react'



const ShareButtonsContainer: FC = () => {
    const url = useUrl()
    return (
        <div className=' absolute bottom-0 left-0 right-0 px-16 pb-12 flex justify-between'>
            <UnderlineButton>{`Let's talk`}</UnderlineButton>
            <div className='flex gap-10'>
                <FacebookShareButton url={url ?? ""} />
                <TwitterShareButton url={url ?? ""}  />
            </div>
        </div>
    );
};

export default ShareButtonsContainer;