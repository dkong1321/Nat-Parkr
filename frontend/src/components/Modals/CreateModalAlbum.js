import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import CreateAlbum from '../CreateAlbum';
import './Modal.css'
function CreateAlbumModal () {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className='add_image_button' onClick={()=> setShowModal(true)}>Add Album</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    < CreateAlbum setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default CreateAlbumModal
