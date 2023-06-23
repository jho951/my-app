import { useState } from 'react';

// 모달 열리고 닫힘을 관장합니다.
const ModalUtils = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }
  return { modalOpen, handleOpenModal, handleCloseModal };
};

export { ModalUtils };
