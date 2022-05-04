import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import CreateImage from '../CreateImage';

function CreateImageModal () {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={()=> setShowModal(true)}>Add Image</button>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    < CreateImage setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}

export default CreateImageModal
