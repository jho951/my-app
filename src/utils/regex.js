// email 형식 검증을 위한 정규식
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 비밀번호 형식 검증을 위한 정규식
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

// 이름 형식 검증을 위한 정규식
export const NAME_REGEX = /^[a-zA-Z가-힣]{2,}$/;

// 전화번호 형식 검증을 위한 정규식
export const PHONE_NUMBER_REGEX = /^\d{2,3}-\d{3,4}-\d{4}$/;

// 휴대폰 형식 검증을 위한 정규식
export const HP2 = /^[0-9]+$/;

export const HP3 = /^[0-9]+$/;

export const BIRTH = /^[0-9]+$/;

// 형식 검증 예시
// const isValidEmail = (email) => {
//     return EMAIL_REGEX.test(email);
//   };

export const REGEX = {
  name: NAME_REGEX,
  email: EMAIL_REGEX,
  password: PASSWORD_REGEX,
  phone: PHONE_NUMBER_REGEX,
  hp2: HP2,
  hp3: HP3,
  birth: BIRTH,
};

export const ERROR_MESSAGE = {
  name: "유효한 형식의 이름을 입력하세요.",
  email: "유효한 형식의 이메일을 입력하세요.",
  password: "유효한 형식의 비밀번호를 입력하세요.",
  password2: "비밀번호를 확인하세요",
  phone: "유효한 형식의 전화번호를 입력하세요.",
  hp2: "",
  hp3: "",
  birth: "유효한 형식의 생년월일을 입력하세요",
};
