import { FC } from "react";

interface Props extends React.HTMLProps<HTMLUListElement>{
    active?: boolean
}
const HamburgerMenu: FC<Props> = ({active = true,...rest}) => {

    const closeButtonStyle = active? {
        topLine: {
            transform: "rotate(-45deg)"
        },
        centerLine: {
            transform: "scaleX(0)"
        },
        bottomLine: {
            transform: "rotate(45deg) scaleX(2)"
        }
    } : {}

    return (
        <ul className="text-white origin-right flex flex-col justify-between items-end w-[20px] h-[16px] hover:cursor-pointer scale-[1.15] xs:scale-[1] cursor-pointer" {...rest}>
            
            <li className="h-[2px] bg-white rounded-3xl w-full origin-top-right transition-transform duration-300 ease-linear" style={closeButtonStyle.topLine}></li>
            <li className="h-[2px] bg-white rounded-3xl w-full origin-center transition-transform duration-300 ease-linear" style={closeButtonStyle.centerLine}></li>
            <li className="h-[2px] bg-white rounded-3xl w-1/2 origin-bottom-right transition-transform duration-300 ease-linear" style={closeButtonStyle.bottomLine}></li>
        </ul>
    )
}




export default HamburgerMenu
