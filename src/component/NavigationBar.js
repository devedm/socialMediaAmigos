import React from 'react';
import Logo from './logoAmigos2.png'
import tachyons from 'tachyons';

const NavigationBar = () => {
    return (
        <header className='avenir flex items-center justify-between pa1 ph1 w-100 border-box' style={{backgroundColor:"#ff7000", height:"60px"}}>
            <div className=''><a className=' v-mid link dim'><img className=' v-mid dib w2 h2 pointer' src={Logo}></img> <p className='pointer v-mid white f4 dib mr3 mr4-ns'>Amigos</p> </a></div>
            <div className='flex'>
                <div className='tr ph3'><a className='link v-mid hover-red pointer white'>Sign In</a></div>
                <div className='tr ph3 b'><a className='link v-mid hover-red pointer white'>Sign Up</a></div>
            </div>
        </header>
    )
}

export default NavigationBar;