import React from 'react';
import PropTypes from 'prop-types';
import { LabelContainer } from './Label.styled';

export const Label = ({ labelText, htmlFor, required }) => {
  return (
    <LabelContainer htmlFor={htmlFor}>
      {labelText}
      {required && (
        <span className="mark-req">
          필수 입력 <sup>*</sup>
        </span>
      )}
    </LabelContainer>
  );
};

///////////////////////////
//// props 자료 타입입니다.///
/////////////////////////
Label.propTypes = {
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
