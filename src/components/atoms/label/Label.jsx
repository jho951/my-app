import React from "react";
import { LabelContainer } from "./Label.styled";

const Label = ({ labelText, htmlFor, required }) => {
  return (
    <LabelContainer htmlFor={htmlFor}>
      {labelText}
      {required && <span className="mark-req">필수 입력</span>}
    </LabelContainer>
  );
};

export default Label;
