import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import EditImageCard from '../EditImage';

function EditImageModal ({image}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={()=> setShowModal(true)}><i className="fas fa-edit"></i></button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <EditImageCard image={image} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default EditImageModal
