import { useEffect, useState, useRef, useCallback } from 'react';
import * as S from './Modal.styled';
import Portal from '../../../utils/Portal';

const Modal = ({ open, close, children }) => {
  const modalRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(open);
  }, [open]);

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (close) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [close, handleOutsideClick]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [modalOpen]);

  return (
    <Portal selector="#modal-root">
      <S.ModalContainer>
        <S.ModalWrap ref={modalRef}>{children}</S.ModalWrap>
      </S.ModalContainer>
    </Portal>
  );
};

export default Modal;
