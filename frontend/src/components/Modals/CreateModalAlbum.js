import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import CreateAlbum from '../CreateAlbum';
import './Modal.css'
function CreateAlbumModal () {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={()=> setShowModal(true)}><i class="fa-solid fa-arrow-up-from-bracket">Album</i></button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    < CreateAlbum setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default CreateAlbumModal
