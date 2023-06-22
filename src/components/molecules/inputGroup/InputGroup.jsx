import React from 'react';
import { InputGroupContainer } from './InputGroup.styled';
import { Label } from '../../atoms/label/Label';
import IconsInput from '../iconsInput/IconsInput';

const InputGroup = ({ type, value, onChange, name, labelText, helpText, isValid, inpRef, direction = 'row' }) => {
  return (
    <InputGroupContainer direction={direction} isValid={isValid}>
      <Label labelText={labelText} />
      <IconsInput type={type} value={value} onChange={onChange} name={name} isValid={isValid} inpRef={inpRef} />
      <p className="text-help">{helpText}</p>
    </InputGroupContainer>
  );
};

export default InputGroup;
