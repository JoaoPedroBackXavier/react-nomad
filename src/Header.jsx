import React from 'react'
import './Header.css';
import BotaoL from './BotaoL';
import BotaoB from './BotaoB';

function HeaderH() {
    const bigbig = {
        fontSize: '30px'
    }


    return (
        <header className="header">
            <nav>
                <a id='laranjinha' href="">Home</a>
                <div>
                    <a href='' id='pages'>pages
                        <div className='menu'>
                            <a href="">About</a>
                            <a href="">Services</a>
                            <a href="">Single Destination</a>
                            <a href="">Testimonials</a>
                            <a href="">Contact</a>
                            <a href="">Blog</a>
                            <a href="">Post</a>
                        </div></a>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
                    
                </div>
                <a href="">Package</a>
                <a href="">Destination</a>
            </nav>
            <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="logo" />
            <div>
                <BotaoB texto="Blog" width="150px"/>
                <BotaoL texto="Contact" width="150px"/>
            </div>
        </header>
    )
}

export default HeaderH