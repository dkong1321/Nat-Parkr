import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import CreateAlbum from '../CreateAlbum';
import './Modal.css'
function CreateAlbumModal () {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={()=> setShowModal(true)} className='button_reg'>Add Album</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    < CreateAlbum setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default CreateAlbumModal
