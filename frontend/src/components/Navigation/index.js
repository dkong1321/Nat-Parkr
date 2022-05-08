// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateImageModal from '../Modals/CreateModalImage';
import CreateAlbumModal from '../Modals/CreateModalAlbum';
import './Navigation.css';
function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <>
            <div>
                <ProfileButton user={sessionUser} />
            </div>
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
                    <NavLink exact to="/" className="nav_buttons">Home</NavLink>
                    {isLoaded && sessionLinks}
                </div>

                    {sessionUser ? <NavLink to="/images" className="nav_buttons">Discover</NavLink> :<></>}
                    {sessionUser ? <NavLink to="/albums" className="nav_buttons">My Albums</NavLink> : <></>}
                    {sessionUser ? <NavLink to="/myimages" className="nav_buttons">My Images</NavLink>: <></>}

                {sessionUser?<CreateImageModal user={sessionUser} />:<></>}
                {sessionUser?<CreateAlbumModal user={sessionUser} />:<></>}
        </div>

    )
}

export default Navigation;
