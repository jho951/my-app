import React from "react"
import PropTypes from "prop-types"
import {LabelContainer} from "./Label.styled"

const Label = ({labelText, htmlFor, required}) => {
  return (
    <LabelContainer htmlFor={htmlFor}>
      {labelText}
      {required && <span className='mark-req'>필수 입력</span>}
    </LabelContainer>
  )
}
Label.propTypes = {
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

export default Label
