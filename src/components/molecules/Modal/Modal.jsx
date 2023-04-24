import {useEffect, useState} from "react"
import Portal from "../../../utils/Portal/Portal"
import {ModalOverLay, ModalWrap} from "./Modal.styled"

const Modal = ({isOpen, onClose, children}) => {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  const handleCloseModal = () => {
    setModalOpen(false)
    onClose()
  }

  return (
    <Portal selector='#modal-root'>
      {modalOpen && (
        <ModalWrap>
          <ModalOverLay className='modal-overlay' onClick={handleCloseModal} />
          <button onClick={handleCloseModal}>Close Modal</button>
          {children}
        </ModalWrap>
      )}
    </Portal>
  )
}

export default Modal
