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

import Alert from '../../../organism/alert/Alert';
import { ModalUtils } from '../../../../utils/ModalUtils';

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

  // const { data } = useQuery('countries', () => axios.get('https://restcountries.com/v3.1/all').then((res) => setBody(res)));

  return (
    <Container maxWidth="688px">
      <CustomTitle title="로그인">
        <CustomImage image={`${IMG_PATH}/happyMedion.png`} alt="logo" />
      </CustomTitle>
      <IconsInput type="password" />
      <div style={{ display: 'flex' }}>
        <IconsInput type="search" />

        <CustomButton size="medium" onClick={() => alert('테스트')}>
          <AiOutlineSearch />
        </CustomButton>
      </div>
      <TextArea longText={longText} />
      <CustomButton size="large" onClick={handleOpenModal}>
        모달 창 테스트
      </CustomButton>
      {modalOpen && <Alert text="모달 내용" confirmButtonText="확인" showModal={handleOpenModal} closeModal={handleCloseModal} />}
      <CustomSelect menus={SELECT1} setBody={setBody} body={body} />
    </Container>
  );
};

export default Login;
