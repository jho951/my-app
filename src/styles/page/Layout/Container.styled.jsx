import styled from 'styled-components';
import { CONTENTS_WIDTH } from '../../GlobalStyled';

const Container = styled.div`
  width: ${CONTENTS_WIDTH};
  padding-top: ${(props) => props.theme.padding};
  max-width: ${(props) => props.maxWidth || '1408px'};
  margin: 0 auto;
`;

export { Container };
