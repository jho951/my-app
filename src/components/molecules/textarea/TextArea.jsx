import React, { useRef } from 'react';
import { TextAreaContainer } from './TextArea.styled';

const TextArea = () => {
  const scrollContainerRef = useRef(null);

  const longText = `긴 텍스트를 스크롤로 확인하는 예시입니다.
  ...
    긴 텍스트를 스크롤로 확인하는 예시입니다.
    여기에 긴 텍스트를 작성하세요.
    ...
    긴 텍스트를 스크롤로 확인하는 예시입니다.
    다음 줄에 이어서 작성하세요.
    긴 텍스트를 스크롤로 확인하는 예시입니다.
    긴 텍스트를 스크롤로 확인하는 예시입니다.
    긴 텍스트를 스크롤로 확인하는 예시입니다.
    ...
    긴 텍스트를 스크롤로 확인하는 예시입니다.
    여기에 긴 텍스트를 작성하세요.
    ...
    긴 텍스트를 스크롤로 확인하는 예시입니다.
    다음 줄에 이어서 작성하세요.
    긴 텍스트를 스크롤로 확인하는 예시입니다.긴 텍스트를 스크롤로 확인하는 예시입니다.
    `;

  return (
    <TextAreaContainer ref={scrollContainerRef}>
      <pre>{longText}</pre>
    </TextAreaContainer>
  );
};

export default TextArea;
