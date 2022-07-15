// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateImageModal from '../Modals/CreateModalImage';
import CreateAlbumModal from '../Modals/CreateModalAlbum';
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
                {/* img(src='/images/Logo.svg' id='nav__logo') */}
                <div className='nav_links_container'>
                    {sessionUser ? <NavLink to="/images" className="nav_buttons">Discover</NavLink> :<></>}
                    {sessionUser ? <NavLink to="/albums" className="nav_buttons">My Albums</NavLink> : <></>}
                    {sessionUser ? <NavLink to="/myimages" className="nav_buttons">My Images</NavLink>: <></>}
                </div>
                <div className='add_modal_buttons'>
                {sessionUser?<CreateImageModal user={sessionUser} />:<></>}
                {sessionUser?<CreateAlbumModal user={sessionUser} />:<></>}
                {sessionUser?<LogOut user={sessionUser} />:<></>}
                </div>
        </div>

    )
}

export default Navigation;
