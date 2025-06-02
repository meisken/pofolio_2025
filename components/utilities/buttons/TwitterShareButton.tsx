import { shareToSocialMedia } from "@/function/client/shareToSocialMedia";
import { cn } from "@/lib/tailwind/cn";
import { CSSProperties, FC, MouseEventHandler, Ref } from "react";







interface Props{
    url: string,
    hashtags?: string[],
    related?: string[],
    title?: string,
    via?: string,
    ref?:  Ref<SVGSVGElement>,
    className?: string,
    style?: CSSProperties
}




const TwitterShareButton: FC<Props> = ({
    className = "h-[20px] w-[20px] cursor-pointer",
    ref,
    url,
    hashtags = [],
    related = [],
    title,
    via,
    style
}) => {
    const handleOnClick:  MouseEventHandler<SVGSVGElement> = () => {
        shareToSocialMedia(
            "twitter",
            {
                url,
                hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
                related: related.length > 0 ? related.join(',') : undefined,
                text: title,
                via
            }
        )
    }
    return (

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135" ref={ref} onClick={handleOnClick} className={cn("h-[20px] w-[20px] cursor-pointer hover:text-secondary",className)} style={{transition: "color 0.2s linear",...style}}>
            <g>
                <g>
                    <path style={{fillRule: "evenodd"}} fill="currentColor" d="M67.5,0A67.5,67.5,0,1,0,135,67.5,67.5,67.5,0,0,0,67.5,0Zm37.31,53.06c0,.77,0,1.54,0,2.32,0,23.68-18,51-51,51a50.68,50.68,0,0,1-27.47-8.06,35.48,35.48,0,0,0,4.27.25A35.93,35.93,0,0,0,52.92,90.9,18,18,0,0,1,36.18,78.45a18,18,0,0,0,8.09-.31A17.93,17.93,0,0,1,29.89,60.57a1.77,1.77,0,0,1,0-.23A17.71,17.71,0,0,0,38,62.59a17.93,17.93,0,0,1-5.55-23.93A50.87,50.87,0,0,0,69.41,57.38,17.72,17.72,0,0,1,69,53.3,17.93,17.93,0,0,1,100,41a36.21,36.21,0,0,0,11.38-4.35,18,18,0,0,1-7.88,9.91,35.57,35.57,0,0,0,10.29-2.82A36.52,36.52,0,0,1,104.81,53.06Z" />
                </g>
            </g>
        </svg>
    
    )
}


export default TwitterShareButton