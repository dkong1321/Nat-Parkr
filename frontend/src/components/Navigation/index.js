// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if(sessionUser){
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
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
