import React, {useState} from 'react';
import {ZoomModal} from '../../context/Modal'
import CreateAlbum from '../CreateAlbum';
import './Modal.css'
function ImageZoomModal ({myImage}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={()=> setShowModal(true)}><img className="view_image" src={`${myImage.imageURL}`} alt={myImage.title}></img></div>
            {showModal && (
                <ZoomModal onClose={()=> setShowModal(false)}>
                    <img onClick={()=> setShowModal(false)} className='view_image_zoom' src={`${myImage.imageURL}`} alt={myImage.title}></img>
                </ZoomModal>
            )}
        </>
    )
}

export default ImageZoomModal
