import React, { useState } from 'react';

import { Container } from '../../../../styles/page/Layout/Container.styled';
import IconsInput from '../../../molecules/iconsInput/IconsInput';
import { CustomButton } from '../../../atoms/button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { IMG_PATH, SELECT1 } from '../../../../utils/constants/project';
import CustomSelect from '../../../molecules/select/Select';
import CustomTitle from '../../../molecules/title/Title';

import { CustomImage } from '../../../atoms/image/Image';
import TextArea from '../../../molecules/textarea/TextArea';

import { ModalUtils } from '../../../../utils/ModalUtils';
import Confirm from '../../../organism/confirm/Confirm';

const longText = `긴 텍스트를 스크롤로 확인하는 예시입니다.
...
  긴 텍스트를 스크롤로 확인하는 예시입니다.
  여기에 긴 텍스트를 작성하세요.
  ...
  긴 텍스트를 스크롤로 확인하는 예시입니다.
  다음 줄에 이어서 작성하세요.
  긴 텍스트를 스크롤로 확인하는 예시입니다.
  긴 텍스트를 스크롤로 확인하는 예시입니다.
  긴 텍스트를 스크롤로 확인하는 예시입니다.
  ...
  긴 텍스트를 스크롤로 확인하는 예시입니다.
  여기에 긴 텍스트를 작성하세요.
  ...
  긴 텍스트를 스크롤로 확인하는 예시입니다.
  다음 줄에 이어서 작성하세요.
  긴 텍스트를 스크롤로 확인하는 예시입니다.긴 텍스트를 스크롤로 확인하는 예시입니다.
  `;

const Login = () => {
  const [body, setBody] = useState('');
  const { modalOpen, handleOpenModal, handleCloseModal } = ModalUtils();
  const handlePrompt = () => {
    const userInput = prompt('prompt 테스트:', '여기에 입력해주세요');
    if (userInput) {
      setBody(userInput);
    }
  };

  const handleConfirmClick = () => {
    alert('안녕');
    handleCloseModal();
  };

  return (
    <Container maxWidth="688px">
      <CustomTitle title="로그인">
        <CustomImage image={`${IMG_PATH}/happyMedion.png`} alt="logo" />
      </CustomTitle>
      <IconsInput type="password" />
      <div style={{ display: 'flex' }}>
        <IconsInput type="search" />
        <CustomButton size="medium" onClick={handlePrompt}>
          <AiOutlineSearch />
        </CustomButton>
      </div>
      <TextArea longText={longText} />
      <CustomButton size="large" onClick={handleOpenModal}>
        모달 창 테스트
      </CustomButton>
      {modalOpen && <Confirm text="테스트" open={modalOpen} close={handleCloseModal} onClick={handleConfirmClick} />}

      <CustomSelect menus={SELECT1} setBody={setBody} body={body} />
      <h1>{body}</h1>
    </Container>
  );
};

export default Login;
