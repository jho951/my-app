import React, { useRef } from 'react';
import { TextAreaContainer } from './TextArea.styled';

const TextArea = ({ longText }) => {
  const scrollContainerRef = useRef(null);

  return (
    <TextAreaContainer ref={scrollContainerRef}>
      <pre>{longText}</pre>
    </TextAreaContainer>
  );
};

export default TextArea;
