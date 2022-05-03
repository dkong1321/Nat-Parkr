// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import CreateImageModal from '../Modals/CreateModal';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <>
            <ProfileButton user={sessionUser} />
            <CreateImageModal user={sessionUser} />
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
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
            <li>
                <NavLink to="/createimage">New Image</NavLink>
            </li>
            <li>
                <NavLink to="/images">Images</NavLink>
            </li>
            <li>
                <NavLink to="/createalbum">Create Album</NavLink>
            </li>
            <li>
                <NavLink to="/albums">Your Albums</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;
