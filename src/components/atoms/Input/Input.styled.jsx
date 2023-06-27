import styled, { css } from 'styled-components';

//  1. buttonSize : 버튼 크기 조정
//    EX) <CustomButton size='large'> 사용방법 </CustomButton>

// 2. inputStyle : 버튼 스타일 변경
//     인풋 종류 (5개): 1.default(기본), 2.outline(외곽선), 3.text(글자 버튼), 4.icon(아이콘),5.skip(웹 접근성을 위한 skip-navigation 버튼)
//   EX) <CustomButton design='outline'> 사용방법 </CustomButton>

//  3. commonInputStyle : 공통으로 적용되는 css 입니다.

const commonInputStyle = css`
  font-size: ${(props) => props.theme.fontSize.s};
  outline: none;
  text-indent: 10px;
  width: ${(props) => props.width || '100%'};
  ${(props) => props.fullWidth && 'max-width: 100%'};
`;

const inputStyle = {
  text: css`
    border: 1px solid #ccc;
    &:focus {
      border: 1px solid red;
    }
  `,
  default: css`
    border: none;
  `,
};

const CustomInputWrap = styled.input`
  ${commonInputStyle}
  ${(props) => (inputStyle[props.type] === inputStyle.text ? inputStyle.text : inputStyle.default)}
`;

export { CustomInputWrap };
