import React, {useState} from 'react';
import {Modal} from '../../context/Modal'
import CreateImage from '../CreateImage';

function CreateImageModal () {
    const [showImageModal, setShowImageModal] = useState(false);
    console.log("hello")
    return (
        <>
            <div className="dropdown_buttons" onClick={()=> setShowImageModal(true)}>+ Image</div>
            {showImageModal && (
                <Modal onClose={()=> setShowImageModal(false)}>
                    < CreateImage setShowImageModal={setShowImageModal}/>
                </Modal>
            )}
        </>
    )
}

export default CreateImageModal
