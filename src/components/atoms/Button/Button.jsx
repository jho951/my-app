import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styled';

export const CustomButton = ({ children, onClick, disable, loading, placeholder, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleKeyDown = (event) => {
    if (!disable && !loading && event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <S.CustomButtonWrap
      {...props}
      loading={loading ? 'true' : 'false'}
      placeholder={placeholder}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      isHovered={isHovered}
      onClick={!disable ? onClick : undefined}
      disabled={disable || loading}
      aria-label={disable || loading ? 'Button disabled' : 'Button'}
      aria-disabled={disable || loading ? 'true' : undefined}
    >
      {loading && (
        <p className="spin-wrap">
          <span className="spinner" aria-hidden="true" />
        </p>
      )}
      {!loading && children}
    </S.CustomButtonWrap>
  );
};

// props 자료 타입입니다.

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
};

CustomButton.defaultProps = {
  disable: false,
  loading: false,
  placeholder: '',
};
