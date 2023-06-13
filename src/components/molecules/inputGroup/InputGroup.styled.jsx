import styled from "styled-components";

export const InputGroupContainer = styled.div`
  display: flex;
  justify-content: center;

  ${({ direction }) => direction !== "row" && `flex-direction: column;`}

  .text-help {
    color: ${({ theme }) => theme.textColor};
    font-size: ${({ theme }) => theme.fontSize.text};

    ${({ isValid }) => (isValid || isValid === undefined) && `opacity: 0;`}
  }
`;
