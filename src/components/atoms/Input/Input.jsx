import {forwardRef} from "react"
import {InputContainer, InputWrap, Input, Icon} from "./Input.styled"
import {useSelector, useDispatch} from "react-redux"
import {
  inputSelector,
  setInputValue,
  setIsFocused,
} from "../../../utils/Redux/CounterSlice"

export const CustomInput = forwardRef(
  ({label, name, placeholder, type, disabled}, ref) => {
    const dispatch = useDispatch()
    const {value, isFocused, errorMessage} = useSelector(inputSelector)

    const handleChange = (e) => {
      dispatch(setInputValue(e.target.value))
    }

    const handleFocus = () => {
      dispatch(setIsFocused(true))
    }

    const handleBlur = () => {
      dispatch(setIsFocused(false))
    }

    return (
      <InputContainer>
        {label && <label htmlFor={name}>{label}</label>}
        <InputWrap>
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            disabled={disabled}
            ref={ref}
          />
          {isFocused && errorMessage && <div>{errorMessage}</div>}
        </InputWrap>
      </InputContainer>
    )
  }
)
