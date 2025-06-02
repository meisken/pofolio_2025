"use client"
import { FC, useState } from 'react'
import Logo from './widget/Logo';
import LanguageToggle from './widget/LanguageToggle';
import HamburgerMenu from './widget/HamburgerMenu';
import NavMenu from './widget/NavMenu';
import SpacingLgContainer from '../utilities/containers/SpacingLgContainer';



const FixedHeader: FC = () => {
    const [navMenuActive,SetNavMenuActive] = useState(false);
    return (
        <header
            className='
                fixed 
                top-0 
                left-0  
                right-0
                py-12
                z-30
                flex
                items-center
            '
        >
            <SpacingLgContainer className='flex justify-between'>
                <div>
                    <Logo />
                </div>
                <div className='flex items-center gap-6'>
                    <LanguageToggle />
                    <HamburgerMenu active={navMenuActive} onClick={() => { SetNavMenuActive(old => !old) }} />
                </div>
                <NavMenu navMenuActive={navMenuActive} />
            </SpacingLgContainer>
        </header>
    );
};

export default FixedHeader;