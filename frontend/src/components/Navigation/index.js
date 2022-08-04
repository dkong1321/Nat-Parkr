// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CreateImageModal from '../Modals/CreateModalImage';
import UserProfileDropdown from '../UserProfile';
import Search from "../Search"
import './Navigation.css';

function Navigation({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
        <div className='nav_bar'>
                <NavLink to="/" className="logo_container">
                {/* <img className='nav_logo' src="./images/NatParkr.svg"></img> */}

                    <img className='nav_logo' src="./images/Nat_Parkr_Logo_v2.svg"></img>
                    <div className='logo_text'>Nat-Parkr</div>


                </NavLink>
                {sessionUser ? <Search/>:<></>}
                <div className='nav_bar_right'>
                {!sessionUser?<LoginFormModal />:<></>}
                {!sessionUser?<SignupFormModal/>:<></>}
                {sessionUser?<NavLink to="/images" className="nav_buttons">Discover</NavLink>:<></>}
                {sessionUser?<CreateImageModal className="user_dropdown_button" {...sessionUser} />:<></>}
                {sessionUser?<UserProfileDropdown/>:<></>}
                </div>

        </div>
        </>

    )
}

export default Navigation;
