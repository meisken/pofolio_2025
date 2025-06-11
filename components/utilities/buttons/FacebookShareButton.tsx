import { shareToSocialMedia } from "@/function/client/shareToSocialMedia";
import { cn } from "@/lib/tailwind/cn";
import { CSSProperties, FC, MouseEventHandler, Ref } from "react";







interface Props{
    url?: string,
    quote?: string,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<SVGSVGElement>,
    share?: boolean
}




const FacebookShareButton: FC<Props> = ({
    className,
    url = "",
    quote,
    ref,
    style,
    share = false
}) => {
    const handleOnClick:  MouseEventHandler<SVGSVGElement> = () => {
        if(share){
            shareToSocialMedia(
                "facebook",
                {
                    u: url,
                    quote
                }
            )
        } 
    }
    return (
      
        <svg ref={ref} xmlns="http://www.w3.org/2000/svg" onClick={handleOnClick} className={cn("h-[20px] w-[20px] cursor-pointer hover:text-secondary ",className)} viewBox="0 0 135 134.18" style={{transition: "color 0.2s linear",...style}}>
            <g>
                <g>
                    <path fill="currentColor" d="M135,67.5a67.5,67.5,0,1,0-78,66.68V87H39.81V67.5H57V52.63C57,35.71,67,26.37,82.45,26.37a103.77,103.77,0,0,1,15.11,1.32V44.3H89.05c-8.39,0-11,5.2-11,10.54V67.5H96.77L93.77,87H78.05v47.17A67.51,67.51,0,0,0,135,67.5Z" />
                </g>
            </g>
        </svg>

  
    )
}


export default FacebookShareButton