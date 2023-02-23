import {useState} from "react"

export default function ModalUtils() {
  const [modalOpen, setModalOpen] = useState(false)

  function handleOpenModal() {
    setModalOpen(true)
  }

  function handleCloseModal() {
    setModalOpen(false)
  }
  return {modalOpen, handleOpenModal, handleCloseModal}
}
