import React, { useEffect, useState } from 'react';
import LogOut from '../Navigation/LogOut';
import CreateImageModal from '../Modals/CreateModalImage';
import CreateAlbumModal from '../Modals/CreateModalAlbum';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./UserProfile.css"
function UserProfileDropdown () {
    const user = (useSelector(state => state.session.user))
    const [menu, setMenu] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const openDropdown = () => {
        if(menu) return
        setMenu(true);
    }
    // console.log(user)
    const closeMenu = () => {
        setMenu(false)
    }

    useEffect(()=> {
        if (!menu) return;
        document.addEventListener('click',closeMenu)
        return ()=> document.removeEventListener("click",closeMenu)
    }, [menu])

    return(
        <>
            <div className='nav_buttons' onClick={openDropdown}>
                {user.username}
            </div>

            {menu && (
                <div className='user_dropdown'>
                        <NavLink to="/albums" className="dropdown_buttons">My Albums</NavLink>
                        <NavLink to="/myimages" className="dropdown_buttons">My Images</NavLink>
                        {/* <CreateImageModal className="dropdown_buttons" user={user} /> */}
                        {/* <CreateAlbumModal className="dropdown_buttons" user={user} showModal={showModal} setShowModal={setShowModal} /> */}
                        <LogOut user={user} />

                </div>
            )}

        </>


    )
}

export default UserProfileDropdown
