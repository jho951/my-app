import Modal from '../../molecules/modal/Modal';
import * as S from './Alert.styled';
import { CustomButton } from '../../atoms/button/Button';

const Alert = ({ text, showModal, closeModal }) => {
  return (
    <Modal isOpen={showModal} role="alertdialog" aria-modal="true" aria-hidden={!showModal}>
      <S.AlertWrap role="document">
        <div className="alert-text-wrap" aria-labelledby="dialog1Title">
          <span id="dialog1Title">{text}</span>
        </div>
        <div className="alert-btn-wrap">
          <CustomButton id="customBtnSelect" design="text" fullWidth onClick={closeModal}>
            <span>확인</span>
          </CustomButton>
        </div>
      </S.AlertWrap>
    </Modal>
  );
};

export default Alert;
