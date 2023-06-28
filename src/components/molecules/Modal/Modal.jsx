import { useEffect, useState, useRef, useCallback } from 'react';
import * as S from './Modal.styled';
import Portal from '../../../utils/Portal';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setModalOpen(typeof isOpen);
  }, [isOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
    onClose();
  };

  const handleOutsideClick = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    if (onClose) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [handleOutsideClick]);

  return (
    <Portal selector="#modal-root">
      {modalOpen && (
        <S.ModalContainer>
          <S.ModalWrap ref={modalRef}>{children}</S.ModalWrap>
        </S.ModalContainer>
      )}
    </Portal>
  );
};

export default Modal;
