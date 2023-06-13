import React, {useEffect, useRef, useState} from "react"
import {JoinFormContainer} from "./JoinForm.styled"
import InputGroup from "../../molecules/inputGroup/InputGroup"
import {CustomButton} from "../../atoms/button/Button"
import {useValidation} from "../../../utils/utils"
import {ERROR_MESSAGE} from "../../../utils/regex"

const JoinForm = () => {
  const [body, setBody] = useState({})
  const inputRefs = useRef({})

  const {valid, checkValidation, setValidation} = useValidation({
    name: undefined,
    email: undefined,
    password: undefined,
    password2: undefined,
  })

  const inputChangeHandler = (e) => {
    const {name, value} = e.target

    setBody((prev) => ({...prev, [name]: value}))
    checkValidation(name, value, body)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    const validNames = Object.keys(valid)

    for (let i = 0; i < validNames.length; i++) {
      if (valid[validNames[i]] === undefined) {
        setValidation(validNames[i], false)
      }

      if (!valid[validNames[i]]) {
        alert(ERROR_MESSAGE[validNames[i]])
        inputRefs?.current[validNames[i]].focus()
        return
      }
    }

    alert("회원가입 성공")
  }

  useEffect(() => {
    console.log(body)
    console.log(valid)
  }, [body])

  return (
    <JoinFormContainer onSubmit={formSubmitHandler}>
      <InputGroup
        type='text'
        value={body?.name || ""}
        onChange={inputChangeHandler}
        name='name'
        labelText='성명'
        helpText='이름은 최소 2글자 이상이어야 하며, 영문 대문자, 영문 소문자, 한글로만 이루어져야 합니다.'
        direction='col'
        isValid={valid?.name}
        inpRef={(el) => (inputRefs.current.name = el)}
      />

      <InputGroup
        type='text'
        value={body?.email || ""}
        onChange={inputChangeHandler}
        name='email'
        labelText='이메일'
        helpText='유효한 이메일 주소를 입력해주세요. (예: example@example.com)'
        direction='col'
        isValid={valid?.email}
        inpRef={(el) => (inputRefs.current.email = el)}
      />

      <InputGroup
        type='password'
        value={body?.password || ""}
        onChange={inputChangeHandler}
        name='password'
        labelText='비밀번호'
        helpText='비밀번호는 최소 8자 이상이어야 하며, 영문 대문자, 영문 소문자, 숫자, 특수 문자(@$!%*#?&) 중 하나 이상을 포함해야 합니다.'
        direction='col'
        isValid={valid?.password}
        inpRef={(el) => (inputRefs.current.password = el)}
      />

      <InputGroup
        type='password'
        value={body?.password2 || ""}
        onChange={inputChangeHandler}
        name='password2'
        labelText='비밀번호 확인'
        helpText='비밀번호가 일치하지 않습니다.'
        direction='col'
        isValid={valid?.password2}
        inpRef={(el) => (inputRefs.current.password2 = el)}
      />

      <CustomButton>회원가입</CustomButton>
    </JoinFormContainer>
  )
}

export default JoinForm
