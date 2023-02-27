const validateInput = (inputValue) => {
  if (!inputValue) {
    return "값을 채워주세요"
  }
  if (inputValue.length < 6) {
    return "최대 글자 문제"
  }
  // more validation rules can be added here
  return ""
}

export {validateInput}
