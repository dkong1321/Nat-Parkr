import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Home.css"
function HomePage() {
    return (
        <div className='splash_container'>
            <div className='intro'>
                {/* <img className='intro_logo' src="./images/Nat_Parkr_Logo_v2.svg"></img> */}
                <div className='splash_intro_text'>Preserve, share, and explore the beauty of America's National Parks</div>
                <div className='splash_intro_text_sub'>Join Nat-Parkr to start exploring today</div>
            </div>
            <div className="splash_text_container">
                <div className='small_home_text'>
                    Welcome to
                </div>
                <div className='large_home_text'>
                    Nat-Parkr
                </div>
            </div>

            <div className='footer_splash'>
                <a href="https://github.com/dkong1321/PokeMart" target="blank">
                    <img className="svg__logo__git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a href="https://www.linkedin.com/in/darren-kong-06b47013b/" target="blank">
                    <img className="svg__logo__linked" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                </a>
            </div>
        </div>
    )
}

export default HomePage
