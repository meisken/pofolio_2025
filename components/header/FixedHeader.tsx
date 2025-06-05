"use client"
import { FC, useState } from 'react'
import Logo from './widget/Logo';
import LanguageToggle from './widget/LanguageToggle';
import HamburgerMenu from './widget/HamburgerMenu';
import NavMenu from './widget/NavMenu';
import SpacingLgContainer from '../utilities/containers/SpacingLgContainer';
import { motion } from "framer-motion"
import { getZoomAndFadeAnimationAttributes } from '@/lib/framerMotion/landingAnimations/ZoomAndFadeVariants';



const FixedHeader: FC = () => {
    const [navMenuActive,SetNavMenuActive] = useState(false);
    return (
        <motion.header
            className='
                fixed 
                top-0 
                left-0  
                right-0
                py-[clamp(32px,calc(((100vw-1024px)/896*16)+32px),48px)]
                z-30
                flex
                items-center
                pointer-events-none
            '
            {...getZoomAndFadeAnimationAttributes({
                scale: {
                    from: 1.025,
                    to: 1
                },
                transition: {
                    delay: 1.9,
                    duration: 1.2
                }
            })}
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
        </motion.header>
    );
};

export default FixedHeader;