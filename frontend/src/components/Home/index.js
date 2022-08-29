import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Home.css"
function HomePage() {
    return (
        <div className='splash_container'>
            <div className='intro'>
                {/* <img className='intro_logo' src="./images/Nat_Parkr_Logo_v2.svg"></img> */}
                <div className='large_home_text'>
                    Welcome to Nat-Parkr
                </div>
                <div className='splash_intro_text'>Preserve, share, and explore the beauty of America's National Parks</div>
                <div className='splash_intro_text_sub'>Join Nat-Parkr to start exploring today</div>
                <br></br>

            </div>

        </div>
    )
}

export default HomePage
