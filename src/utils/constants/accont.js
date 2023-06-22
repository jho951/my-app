import { getCookie, setCookie, removeCookie } from '../Cookies/cookies';

// 쿠키 도메인 IP
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_IP ? process.env.NEXT_PUBLIC_DOMAIN_IP : '.127.0.0.1';

/**
 * 로그인 쿠키 아이디
 * 약자 ID_JTW = 토큰 값
 * 약자 ID_SES = 로그인 아이디
 */
export const PROJECT_ID = 'HAPPYMEDIAN';
const TOKEN = `ID_${PROJECT_ID}_JWT`;
const USER_SESSION = `ID_${PROJECT_ID}_SES`;

/**
 *
 * @returns 로그인 유저 토큰
 */
export const getJwt = () => {
  return getCookie(TOKEN);
};

export const setJwt = (token) => {
  return setCookie(TOKEN, token, { path: '/', domain: DOMAIN });
};

/**
 *
 * @returns 로그인 유저 아이디
 */
export const getUserId = () => {
  return getCookie(USER_SESSION);
};

export const setUserId = (user) => {
  return setCookie(USER_SESSION, user, { path: '/', domain: DOMAIN });
};

/**
 *
 * @returns 로그인 체크
 */
export const loginCheck = () => {
  return !!(getJwt() && getUserId());
};

/**
 *
 * @returns 로그아웃 쿠키 제거
 */
export const cookieRemove = () => {
  return new Promise((resolve) => {
    removeCookie(TOKEN, { path: '/', domain: DOMAIN });
    removeCookie(USER_SESSION, { path: '/', domain: DOMAIN });

    resolve(true);
  });
};

/**
 *
 * @returns 스토리지 전부 삭제
 */
export const removeStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};

/**
 *
 * @returns 로그아웃
 */
export const userLogout = () => {
  removeStorage();
  cookieRemove();
  window.location.reload();
};

/**
 *
 * @param {String} cookieString
 * @returns json Cookie split
 */
export const cookieStringToObject = (cookieString) => {
  if (!cookieString) {
    return '';
  } else {
    const cookieStringClone = cookieString.split('; ');
    const result = {};

    for (let i = 0; i < cookieStringClone.length; i++) {
      const cur = cookieStringClone[i].split('=');
      result[cur[0]] = cur[1];
    }

    return result;
  }
};
