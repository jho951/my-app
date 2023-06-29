import Modal from '../../molecules/modal/Modal';
import * as S from './Confirm.styled';
import { CustomButton } from '../../atoms/button/Button';

const Confirm = ({ text, open, close, onClick }) => {
  return (
    <Modal role="dialog" aria-modal="true" open={open}>
      <S.ConfirmWrap>
        <div className="confirm-text-wrap">
          <span id="dialog1Title">{text}</span>
        </div>
        <div className="confirm-btn-wrap">
          <CustomButton id="customBtnSelect" design="outline" fullWidth onClick={onClick}>
            <span>로그인하러가기</span>
          </CustomButton>
          <CustomButton id="customBtnSelect" design="outline" fullWidth onClick={close}>
            <span>취소</span>
          </CustomButton>
        </div>
      </S.ConfirmWrap>
    </Modal>
  );
};

export default Confirm;

// useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
