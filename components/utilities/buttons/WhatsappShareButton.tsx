import { shareToSocialMedia } from "@/function/client/shareToSocialMedia";
import { cn } from "@/lib/tailwind/cn";
import { CSSProperties, FC, MouseEventHandler, Ref } from "react";







interface Props {
    url: string,
    title?: string,
    separator?: string,
    ref?:  Ref<SVGSVGElement>,
    className?: string,
    style?: CSSProperties
}


const WhatsappShareButton: FC<Props> = ({
    className,
    style,
    url,
    title,
    separator = " ",
    ref
}) => {
    const handleOnClick:  MouseEventHandler<SVGSVGElement> = () => {
        shareToSocialMedia(
            "whatsapp",
            {
                text: title ? title + separator + url : url
            }
        )
    }
    return (
        <svg  xmlns="http://www.w3.org/2000/svg" width="135" height="135" viewBox="0 0 135 135"  ref={ref} onClick={handleOnClick} className={cn("h-[20px] w-[20px] cursor-pointer hover:text-secondary",className)} style={{transition: "color 0.2s linear",...style}} >
            <g>
                <path fill="currentColor" d="M99.82,47.21A35.59,35.59,0,0,0,39.53,85.05l.85,1.34-3.6,13.13L50.25,96l1.31.72A35.57,35.57,0,0,0,99.82,47.21ZM90.68,81.42c-.89,2.5-5.22,4.78-7.22,5.09a14.65,14.65,0,0,1-6.74-.43,60.24,60.24,0,0,1-6.1-2.25C59.89,79.2,52.87,68.4,52.34,67.68S48,61.88,48,56.61a12,12,0,0,1,3.75-8.92,4,4,0,0,1,2.85-1.34c.66,0,1.34,0,2,0s1.52-.3,2.41,1.84,3,7.4,3.3,7.94A2,2,0,0,1,62.37,58a7.56,7.56,0,0,1-1.12,1.82c-.54.62-1.08,1.34-1.61,1.87s-1.09,1.11-.47,2.18a32.2,32.2,0,0,0,6,7.41,29,29,0,0,0,8.61,5.31c1.07.54,1.7.44,2.32-.27s2.66-3.12,3.38-4.19,1.43-.9,2.41-.54,6.24,3,7.31,3.48,1.83.81,2.1,1.26S91.57,78.92,90.68,81.42Z" />
                <path fill="currentColor" d="M67.5,0A67.5,67.5,0,1,0,135,67.5,67.5,67.5,0,0,0,67.5,0Zm2.16,109a42.81,42.81,0,0,1-20.46-5.31l-22.7,6,6.1-22.18A42.84,42.84,0,1,1,69.66,109Z" />
            </g>
        </svg>
  
    )
}


export default WhatsappShareButton