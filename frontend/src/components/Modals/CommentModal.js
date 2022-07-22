import React, {useState} from 'react';
import {SidebarModal} from '../../context/Modal'
import ShowComments from '../ShowImage/Comment';
import './Modal.css'
function CommentModal ({myImage}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className = "new_album_button" onClick={()=> setShowModal(true)}>Comments</div>
            {showModal && (
                <SidebarModal onClose={()=> setShowModal(false)}>
                    <ShowComments myImage={myImage} setShowModal={setShowModal}/>
                </SidebarModal>
            )}
        </>
    )
}

export default CommentModal
