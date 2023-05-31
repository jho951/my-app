import { forwardRef } from "react";
import { InputContainer, InputWrap, Icon } from "./Input.styled";
import { Input } from "../../atoms/Input/Input.styled";

export const PasswordInput = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      type,
      disabled,
      validateInput,
      showPassword,
      handleClick,
    },
    ref
  ) => {
    return (
      <InputContainer>
        {label && <label htmlFor={name}>{label}</label>}
        <InputWrap>
          <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            value={inputValue}
          />
          {type === "password" && (
            <Icon
              className={showPassword ? "text" : "password"}
              onClick={handleClick}
            />
          )}
        </InputWrap>
      </InputContainer>
    );
  }
);
