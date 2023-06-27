import React, { useState } from 'react';

import { Container } from '../../../../styles/page/Layout/Container.styled';
import IconsInput from '../../../molecules/iconsInput/IconsInput';
import { CustomButton } from '../../../atoms/button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { IMG_PATH, SELECT1 } from '../../../../utils/constants/project';
import CustomSelect from '../../../molecules/select/Select';

import { useQuery } from 'react-query';
import axios from 'axios';
import CustomTitle from '../../../molecules/title/Title';

import { CustomImage } from '../../../atoms/image/Image';
import TextArea from '../../../molecules/textarea/TextArea';

const Login = () => {
  const [body, setBody] = useState('');

  const { data } = useQuery('countries', () => axios.get('https://restcountries.com/v3.1/all').then((res) => setBody(res)));

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
      <TextArea />

      <CustomSelect menus={SELECT1} setBody={setBody} />
    </Container>
  );
};

export default Login;
