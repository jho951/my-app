import styled, { css } from 'styled-components';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////   1. buttonSize : 버튼 크기 조정                                 ////////////////////////////////////////////////////////////////////////////
////////////////////////    EX) <CustomButton size='large'> 사용방법 </CustomButton>

////////////////////////   2. buttonStyle : 버튼 스타일 변경                              ///////////////////////////////////////////////////////////////////////////
////////////////////////       버튼 종류 (5개): 1.default(기본), 2.outline(외곽선), 3.text(글자 버튼), 4.icon(아이콘),5.skip(웹 접근성을 위한 skip-navigation 버튼)
////////////////////////    EX) <CustomButton design='outline'> 사용방법 </CustomButton>

////////////////////////   3. commonButtonStyles : 공통으로 적용되는 css 입니다.            ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const buttonSize = {
  small: css`
    padding: 10px;
    font-size: ${(props) => props.theme.fontSize.s};
  `,
  medium: css`
    padding: 10px 20px;
    font-size: ${(props) => props.theme.fontSize.m};
  `,
  large: css`
    padding: 40px 60px;
    font-size: ${(props) => props.theme.fontSize.l};
  `,
};

const buttonStyle = {
  ////////////////////// 기본 버튼입니다.//////////////////////

  default: css`
    color: ${(props) => props.theme.button.text};
    background: ${(props) => props.theme.button.default};
    color: #ffffff;

    &:disabled {
      background: ${(props) => (props.loading ? props.theme.button.progress : props.theme.disabled)};
    }

    &:not(:disabled) {
      &:hover {
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(41, 41, 41, 0.3),
          4px 4px 5px 0px rgba(39, 38, 38, 0.3);
      }

      &:active {
        background: ${(props) => props.theme.button.active};
      }
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
    }
  `,

  //////////////////////아웃라인 버튼입니다.////////////////////

  outline: css`
    background: transparent;
    border: 1.5px solid ${(props) => props.theme.button.default};
    color: ${(props) => props.theme.button.default};

    &:disabled {
      border: 1.5px solid ${(props) => (props.loading ? props.theme.button.progress : props.theme.disabled)};
      color: ${(props) => (props.loading ? props.theme.button.progress : props.theme.disabled)};
    }

    &:not(:disabled) {
      &:hover {
        border: 1.8px solid ${(props) => props.theme.button.default};
        transition: border 0.3s ease-in-out;
        font-weight: 600;

        &:active {
          box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(41, 41, 41, 0.3),
            4px 4px 5px 0px rgba(39, 38, 38, 0.3);
        }
      }
    }

    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.button.active};
      font-weight: 600;
    }
  `,

  /////////////////////////////글자 버튼입니다.////////////////////////

  text: css`
    display: inline-block;
    color: ${(props) => props.theme.text};
    background: transparent;

    &:disabled {
      color: ${(props) => (props.loading ? props.theme.button.progress : props.theme.disabled)};
    }

    &:not(:disabled) {
      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.text};
      }

      &:active {
        transform: none;
        font-weight: 600;
        border-bottom: 1px solid ${(props) => props.theme.text};
      }
    }

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.text};
      font-weight: 600;
    }
  `,

  /////////////////////////////아이콘 버튼입니다.///////////////////////

  icon: css`
    background: transparent;
  `,

  //////////////////////skip navigation을 위한 버튼입니다.//////////////

  skip: css`
    position: absolute;
    width: 100%;
    top: -30px;
    left: 0;
    padding: 0;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.subColor};
    z-index: 100;
    opacity: 0;
    pointer-events: none;

    &:focus {
      font-size: ${(props) => props.theme.fontSize.l};
      top: 0;
      opacity: 1;
      pointer-events: auto;
    }
  `,
};

const commonButtonStyles = css`
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(1);
  }

  &:disabled {
    cursor: not-allowed;
    transform: ${(props) => (props.loading ? 'scale(0.96)' : 'scale(1)')};
  }
`;

///////////////////////////////////////////////////////////////////////////
////////////////////// 위 css 가 적용된 버튼 컴퍼넌트 입니다//////////////////////
/////////////////////////////////////////////////////////////////////////

export const CustomBtn = styled.button`
  ${commonButtonStyles}

  ${(props) => buttonStyle[props.design] || buttonStyle.default}
  ${(props) => buttonSize[props.size] || buttonSize.medium}

  .spin-wrap {
    display: flex;
    justify-content: center;
  }
`;
