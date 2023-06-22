import { useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import { REGEX } from './regex';

////////////////////////////////////////////////
//// 천 단위마다 콤마를 추가 해주는 utils 함수입니다.////
//////////////////////////////////////////////

const addComma = (num) => {
  return num.toLocaleString();
};

//////////////////////////////////////////////////////////////
////문자(title)를 지정된 길이(length)만큼 잘라주는 utils 함수입니다.////
////////////////////////////////////////////////////////////

const textSlice = (title, length) => {
  if (!title) return '';
  if (title.length > length) {
    return title.slice(0, length) + '...';
  }
  return title;
};

////////////////////////////////////////////////////////////////////////////////////////
//현재 시간과 제공하는 날짜(date)와의 차이를 계산해 밀리세컨즈 형태를 날짜 형태로 바꿔주는 utils 함수입니다.//
//////////////////////////////////////////////////////////////////////////////////////

const diffToText = (date) => {
  const now = moment();
  const targetDate = moment(Number(date));
  const diff = now.diff(targetDate, 'seconds');

  if (diff < 60) {
    return `${diff}초 전`;
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes}분 전`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours}시간 전`;
  } else if (diff < 31536000) {
    const days = Math.floor(diff / 86400);
    return `${days}일 전`;
  } else {
    return targetDate.format('YYYY-MM-DD');
  }
};

//////////////////////////////////////////////////////////////
///주어진 초(seconds)를 "시:분:초" 형식으로 변환하는 utils 함수입니다.///
////////////////////////////////////////////////////////////

const timeFormat = (seconds) => {
  if (isNaN(seconds)) {
    return '0:00';
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedHours = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
  const formattedMinutes = `${minutes.toString().padStart(2, '0')}:`;
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
  return formattedHours + formattedMinutes + formattedSeconds;
};

///////////////////////////////////////////////////////////////////////
///생성 일자(createdAt)를 지정된 형식(format)에 맞게 변환하는 utils 함수입니다.///
////////////////////////////////////////////////////////////////////

const setCreatedAt = (createdAt, format) => {
  if (!(createdAt > 0)) return '-';

  const dt = new Date(Number(createdAt));
  const addDt =
    dt.getFullYear() +
    format +
    `00${(dt.getMonth() + 1).toString()}`.slice(-2) +
    format +
    `00${dt.getDate().toString()}`.slice(-2) +
    format +
    `00${dt.getHours().toString()}`.slice(-2) +
    { format } +
    `00${dt.getMinutes().toString()}`.slice(-2);

  return addDt.slice(0, 10);
};

/////////////////////////////////////////////////////
///주어진 배열(array)에서 중복을 제거하는 utils 함수입니다.///
//////////////////////////////////////////////////

const removeDuplicates = (array) => {
  return [...new Set(array)];
};

///////////////////////////////////////////////
///skip navigation 적용을 위한 utils 함수입니다.///
////////////////////////////////////////////

const skipNavigation = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

///////////////////////////////////////
/// 스코롤을 못하게 막는 utils 함수입니다. ///
/////////////////////////////////////

const bodyHiddenToggle = (toggle) => {
  const body = document.querySelector('body');

  if (toggle) {
    body.classList.add('hidden');
  } else {
    body.classList.remove('hidden');
  }
};

/////////////////////////////////////////////////////////////
/// 이미지의 natural width, height를 리턴하는 custom hook입니다.///
///////////////////////////////////////////////////////////

const useImageSize = (imagePath) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    aspectRatio: 0,
    isLoaded: false,
  });

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      const { width, height } = img;
      const aspectRatio = `${width}:${height}`;

      setDimensions({ width, height, aspectRatio, isLoaded: true });
    };

    return () => {
      img.onload = null;
    };
  }, [imagePath]);

  return dimensions;
};
/////////////////////////////////////////////////////////////////
/// 유효성통과 여부와 유효성을 체크하는 함수를 리턴하는 custom hook입니다. ///
///////////////////////////////////////////////////////////////

const useValidation = (initialState) => {
  const [valid, setValid] = useState(initialState);

  const checkValidation = useCallback((name, value, body) => {
    setValid((prevValid) => {
      let isValid = false;

      if (REGEX[name]) {
        isValid = REGEX[name].test(value);
      }

      if (name === 'password2') {
        isValid = value === body.password;
      }

      if (name === 'password') {
        return {
          ...prevValid,
          [name]: isValid,
          ['password2']: value === body.password2,
        };
      }

      return { ...prevValid, [name]: isValid };
    });
  }, []);

  const setValidation = useCallback((name, isValid) => {
    setValid((prevValid) => ({ ...prevValid, [name]: isValid }));
  }, []);

  return { valid, checkValidation, setValidation };
};

export {
  addComma,
  textSlice,
  diffToText,
  timeFormat,
  setCreatedAt,
  removeDuplicates,
  skipNavigation,
  useImageSize,
  useValidation,
  bodyHiddenToggle,
};
