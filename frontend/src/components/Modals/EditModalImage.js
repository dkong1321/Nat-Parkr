import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import EditImageCard from '../EditImage';

function EditImageModal () {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={()=> setShowModal(true)}>Add Image</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    < EditImageCard setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default EditImageModal
