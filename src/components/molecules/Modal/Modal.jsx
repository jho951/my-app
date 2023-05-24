import {useEffect, useState, useRef} from "react"
import Portal from "../../../utils/Portal/Portal"
import {ModalOverLay, ModalWrap} from "./Modal.styled"

const Modal = ({isOpen, onClose, children}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  const handleCloseModal = () => {
    setModalOpen(false)
    onClose()
  }

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <Portal selector='#modal-root'>
      {modalOpen && (
        <ModalWrap ref={modalRef}>
          <ModalOverLay className='modal-overlay' onClick={handleCloseModal} />
          {children}
        </ModalWrap>
      )}
    </Portal>
  )
}

export default Modal
