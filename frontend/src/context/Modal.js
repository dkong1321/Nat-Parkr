import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({children}){
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(()=>{
        setValue(modalRef.current);
    },[])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    )
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function ZoomModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div className='zoom_modal'>
      <div id="modal-background" onClick={onClose} />
      <div className='zoom_modal_content'>
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function SidebarModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div className='comment_modal'>
      <div id="modal-background" onClick={onClose} />
      <div className='comment_modal_content'>
        {children}
      </div>
    </div>,
    modalNode
  );
}
