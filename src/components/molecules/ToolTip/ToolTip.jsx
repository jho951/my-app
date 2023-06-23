import { useCallback, useEffect, useState } from 'react';
import Portal from '../../../utils/Portal/Portal';
import { TooltipArrow, TooltipBox, TooltipContainer, TooltipText } from './ToolTip.styled';
import Link from 'next/link';

// EX)
/* <ToolTip content='tooltip-test' position='right' link='http://www.naver.com'>테스트</ToolTip> */

const ToolTip = ({ children, content, position, link }) => {
  const [show, setShow] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState(null);

  const handleRef = useCallback((node) => {
    if (node !== null) {
      const width = node.getBoundingClientRect()?.width;
      setTooltipWidth(width);
    }
  }, []);
  useEffect(() => {
    const tooltipRoot = document?.getElementById('tooltip-root');
    if (!tooltipRoot) {
      const newTooltipRoot = document.createElement('div');
      newTooltipRoot.id = 'tooltip-root';
      document.body.appendChild(newTooltipRoot);
    }
  }, []);

  useEffect(() => {
    if (tooltipWidth) {
      const box = document?.querySelector('#tooltip-box');
      box?.style?.setProperty('--tooltip-width', `${tooltipWidth}px`);
    }
  }, [tooltipWidth]);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <Portal selector="#tooltip-root">
      <TooltipContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
        {show && (
          <TooltipBox position={position}>
            <TooltipText ref={handleRef}>{content}</TooltipText>
            <Link role="link" href={link} target="/blank" rel="noopener noreferrer">
              <small>더 알아보기</small>
            </Link>
            <TooltipArrow position={position} />
          </TooltipBox>
        )}
      </TooltipContainer>
    </Portal>
  );
};

export default ToolTip;
