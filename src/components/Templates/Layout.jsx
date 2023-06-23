import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';
import { LayoutContext } from './Layout.Styled';
import { GlobalStyle, theme } from '../../styles/GlobalStyled';

import { CustomButton } from '../atoms/button/Button';
import Header from '../Organism/header/Header';
import Footer from '../Organism/footer/Footer';
import Main from '../Organism/main/Main';

import { skipNavigation } from '../../utils/utils';
import { PROJECT_NAME } from '../../utils/constants/project';

export const Layout = ({ children }) => {
  const { matchese } = useContext(LayoutContext);
  const router = useRouter();

  const accountLink = [
    { id: 'login', label: '로그인', href: '/login' },
    { id: 'join', label: '회원가입', href: '/join' },
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {router.pathname === '/' && (
        <>
          <h1 className="visuallyhidden">{PROJECT_NAME}</h1>
          <CustomButton design="skip" onClick={() => skipNavigation('main')}>
            병원메뉴
          </CustomButton>
        </>
      )}
      {!matchese ? <Header accountLink={accountLink} /> : <div>모바일</div>}
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};
