import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import CreateAlbum from '../CreateAlbum';
import './Modal.css'
function CreateAlbumModal () {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className = "new_album_button" onClick={()=> setShowModal(true)}>Add an Album</div>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <CreateAlbum setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default CreateAlbumModal
