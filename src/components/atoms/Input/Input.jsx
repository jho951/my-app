import React, {forwardRef} from "react"
import {SCustomInput} from "./Input.styled"

const CustomInput = forwardRef((props, ref) => {
  const {
    label,
    point,
    err,
    helpText,
    color,
    type,
    placeholder,
    value,
    disabled,
    maxLength,
    style,
    width,
    height,
    fontSize,
    onChange,
    onKeyDown,
  } = props

  const handlePasswordType = () => {
    props.setType(type === "password" ? "text" : "password")
  }

  return (
    <SCustomInput
      style={style}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      disabled={disabled}
    >
      {label && (
        <label className='custom-input-label'>
          {label}
          {point && <i className='custom-input-label-point'>*</i>}
        </label>
      )}

      <div className={`custom-input-container ${err ? "error" : ""}`}>
        <input
          className='custom-input'
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          maxLength={maxLength}
          ref={ref}
        />

        {type === "password" && (
          <span className='password-icon' onClick={handlePasswordType}>
            {type === "password" ? "눈" : "눈뜸"}
          </span>
        )}
      </div>

      {helpText && err && (
        <div className='help-text' style={{display: "flex"}}>
          {helpText}
        </div>
      )}
    </SCustomInput>
  )
})

export default CustomInput
