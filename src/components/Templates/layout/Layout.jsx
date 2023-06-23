import React, { useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { LayoutContext } from '../Layout.Styled';
import { GlobalStyle, theme } from '../../../styles/GlobalStyled';

import Header from '../../Organism/header/Header';
import Footer from '../../Organism/footer/Footer';
import Contents from '../../Organism/main/Main';

export const Layout = ({ children }) => {
  const { matches } = useContext(LayoutContext);

  const accountLink = [
    { id: 'login', label: '로그인', href: '/login' },
    { id: 'join', label: '회원가입', href: '/join' },
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {!matches ? <Header accountLink={accountLink} /> : <div>모바일</div>}
      <Contents>{children}</Contents>
      <Footer />
    </ThemeProvider>
  );
};
