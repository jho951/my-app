import React from 'react';
import * as S from './Title.styled';

const CustomTitle = ({ title, children }) => {
  return (
    <S.TitleContainer>
      {children}
      {title && <h1>{title}</h1>}
    </S.TitleContainer>
  );
};

export default CustomTitle;
