import React, { useState } from 'react';
import { Container } from '../../../../styles/page/Layout/Container.styled';
import IconsInput from '../../../molecules/iconsInput/IconsInput';
import { CustomButton } from '../../../atoms/button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { SELECT1 } from '../../../../utils/constants/project';
import { CustomList } from '../../../atoms/list/list';
import * as S from './Login.styled';

const Login = () => {
  const [a, setA] = useState(false);
  const click = () => {
    setA((prev) => !prev);
  };
  return (
    <Container maxWidth="688px">
      <IconsInput type="password" />
      <div style={{ display: 'flex' }}>
        <IconsInput type="search" />
        <CustomButton size="medium" onClick={() => alert('테스트')}>
          <AiOutlineSearch />
        </CustomButton>
      </div>

      <S.SelectWrap>
        <CustomButton design="outline" fullWidth onClick={click}>
          선택
        </CustomButton>

        {a && (
          <ul>
            <CustomList menus={SELECT1} />
          </ul>
        )}
      </S.SelectWrap>
    </Container>
  );
};

export default Login;
