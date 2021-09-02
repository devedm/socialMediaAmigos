import React from 'react';
import Logo from './logoAmigos2.png'
import tachyons from 'tachyons';

const NavigationBar = () => {
    return (
        <header className='dt w-100 border-box pa1' style={{backgroundColor:"#ff7000"}}>
            <div className='dtc w-25'><a className=' v-mid link dim '><img className=' v-mid dib w2 h2' src={Logo}></img> <p className='dim v-mid white f4 dib mr3 mr4-ns'>Amigos</p> </a></div>
            <div className='dtc dib tr'><a className='link v-mid dim white'>Sign Up</a></div>
        </header>
        
    )
}

export default NavigationBar;