import React from 'react';
import Logo from './logoAmigos2.png'
import tachyons from 'tachyons';

const FooterBar = () => {
    return (
        <header className='avenir flex items-center justify-between pa1 ph1 w-100 border-box' style={{backgroundColor:"#ff7000", height:"60px"}}>
            <div>
                
            </div>
            <div className='flex'>
                <div className='tr ph3'><a className='link v-mid hover-red pointer white'>About</a></div>
                <div className='tr ph3'><a className='link v-mid hover-red pointer white'>Privacy Policy</a></div>
                <div className='tr ph3'><a className='link v-mid hover-red pointer white'>Privacy Policy</a></div>
            </div>
        </header>
    )
}

export default FooterBar;