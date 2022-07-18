import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import CreateAlbum from '../CreateAlbum';
import './Modal.css'
function CreateAlbumModal () {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="dropdown_buttons" onClick={()=> setShowModal(true)}>+ Album</div>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <CreateAlbum setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default CreateAlbumModal
