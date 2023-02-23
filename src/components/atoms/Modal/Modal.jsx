import React, {useState, useEffect} from "react"
import {ModalOverLay, ModalWrap} from "./Modal.styled"

function Modal({isOpen, onClose, children}) {
  const [modalOpen, setModalOpen] = useState(isOpen)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  const modalClose = () => {
    setModalOpen(false)
    onClose && onClose()
  }

  return (
    <>
      {modalOpen && (
        <ModalOverLay>
          <ModalWrap>
            <div className='modal-header'>
              <button className='modal-close' onClick={modalClose}>
                &times;
              </button>
            </div>
            <div className='modal-content'>{children}</div>
          </ModalWrap>
        </ModalOverLay>
      )}
    </>
  )
}

export default Modal
