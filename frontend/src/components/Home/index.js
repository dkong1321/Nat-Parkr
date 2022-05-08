import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Home.css"
function HomePage() {
    return (
        <div className='splash_container'>
            <div className='intro'>
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
        </div>
    )
}

export default HomePage
