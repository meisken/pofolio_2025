"use client"
import { FC, useState } from 'react'
import Logo from './widget/Logo';
import LanguageToggle from './widget/LanguageToggle';
import HamburgerMenu from './widget/HamburgerMenu';
import NavMenu from './widget/NavMenu';
import SpacingLgContainer from '../utilities/containers/SpacingLgContainer';
import CustomLandingAnimation from '../utilities/animations/landing/CustomLandingAnimation';



const FixedHeader: FC = () => {
    const [navMenuActive,SetNavMenuActive] = useState(false);
    return (
        <header
            className='
                fixed 
                top-0 
                left-0  
                right-0
                
                z-30
                flex
                items-center
                pointer-events-none
            '
    
        >
            <CustomLandingAnimation
                className='
                    w-full 
                    h-full 
                    py-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)]
                    flex
                    items-center
                '
                styleFrom={{
                    opacity: 0,
                    transform: "translateY(-20px)"
                }}
                styleTo={{
                    opacity: 1,
                    transform: "translateY(0px)"
                }}
                duration={0.6}
            >
                <SpacingLgContainer className='flex justify-between'>

                    <Logo />
                    <div 
                        className='flex items-center gap-6 pointer-events-auto'
                    >
                        <LanguageToggle />
                        <HamburgerMenu active={navMenuActive} onClick={() => { SetNavMenuActive(old => !old) }} />
                    </div>
                    <NavMenu navMenuActive={navMenuActive} SetNavMenuActive={SetNavMenuActive} />
            
                </SpacingLgContainer>
            </CustomLandingAnimation>
        </header>
    );
};

export default FixedHeader;