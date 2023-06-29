import Modal from '../../molecules/modal/Modal';
import * as S from './Alert.styled';
import { CustomButton } from '../../atoms/button/Button';

const Alert = ({ text, confirmButtonText, showModal, closeModal }) => {
  return (
    <Modal isOpen={showModal}>
      <S.AlertWrap>
        <div className="alert-text-wrap">
          <p>{text}</p>
        </div>
        <div className="alert-footer">
          <CustomButton id="customBtnSelect" design="text" fullWidth onClick={closeModal}>
            <p>{confirmButtonText}</p>
          </CustomButton>
        </div>
      </S.AlertWrap>
    </Modal>
  );
};

export default Alert;
