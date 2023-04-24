// email 형식 검증을 위한 정규식
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// 비밀번호 형식 검증을 위한 정규식
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/

// 이름 형식 검증을 위한 정규식
export const NAME_REGEX = /^[a-zA-Z가-힣]{2,}$/

// 전화번호 형식 검증을 위한 정규식
export const PHONE_NUMBER_REGEX = /^\d{2,3}-\d{3,4}-\d{4}$/

// 휴대폰 형식 검증을 위한 정규식
export const HP2 = /^[0-9]+$/

export const HP3 = /^[0-9]+$/

export const BIRTH = /^[0-9]+$/

// 형식 검증 예시
// const isValidEmail = (email) => {
//     return EMAIL_REGEX.test(email);
//   };
