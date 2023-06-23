import React from 'react';
import PropTypes from 'prop-types';
import { LabelWrap } from './Label.styled';

export const CustomLabel = ({ labelText, htmlFor, required }) => {
  return (
    <LabelWrap htmlFor={htmlFor}>
      {labelText}
      {required && (
        <span className="mark-req">
          필수 입력 <sup>*</sup>
        </span>
      )}
    </LabelWrap>
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
