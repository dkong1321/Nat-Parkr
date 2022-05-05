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
                <NavLink to="/signup">Sign Up</NavLink>
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
                <div>
                    <NavLink to="/images" className="nav_buttons">Discover</NavLink>
                </div>
                <div>
                    <NavLink to="/albums" className="nav_buttons">Your Albums</NavLink>
                </div>
                <CreateImageModal user={sessionUser} />
                <CreateAlbumModal user={sessionUser} />
        </div>

    )
}

export default Navigation;
