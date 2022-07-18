// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateImageModal from '../Modals/CreateModalImage';
import CreateAlbumModal from '../Modals/CreateModalAlbum';
import UserProfileDropdown from '../UserProfile';
import Search from "../Search"
import LogOut from './LogOut';
import './Navigation.css';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <>
            {/* <div>
                <ProfileButton user={sessionUser} />
                <div>{sessionUser.name}</div>
            </div> */}
            </>
        );

    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal/>
            </>
        );
    }

    return (
        <div className='nav_bar'>
                <div>
                    {isLoaded && sessionLinks}
                </div>

                <div className='nav_bar_right'>
                {sessionUser?<NavLink to="/images" className="nav_buttons">Discover</NavLink>:<></>}
                {sessionUser?<UserProfileDropdown/>:<></>}
                <Search/>
                </div>
        </div>

    )
}

export default Navigation;
