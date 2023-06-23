import styled from 'styled-components';

export const LabelWrap = styled.label`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.m};
  .mark-req {
    color: ${(props) => props.theme.warning};
  }
`;
