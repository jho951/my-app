import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Label.styled';

export const CustomLabel = ({ labelText, htmlFor, required }) => {
  return (
    <S.LabelWrap htmlFor={htmlFor}>
      {labelText}
      {required && (
        <small className="mark-req">
          필수 입력 <sup>*</sup>
        </small>
      )}
    </S.LabelWrap>
  );
};

// props 자료 타입입니다.

CustomLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
CustomLabel.defaultProps = {
  required: false,
};
