import styled, {css} from "styled-components"

const linkSize = {
  md: css`
    .label-txt {
      margin-top: 16px;
      ${({theme}) => `font-size: ${theme.fontSize.m}`}
    }

    .icon-container {
      width: 72px;
      height: 72px;
    }
  `,
  lg: css`
    .label-txt {
      margin-top: 24px;
      ${({theme}) => `font-size: ${theme.fontSize.xl}`}
    }

    .icon-container {
      width: 120px;
      height: 120px;
    }
  `,
}

export const IconLinkContainer = styled.div`
  .link-item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;

    ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
    ${({isBoxShadow}) =>
      isBoxShadow && `box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);`}

    img {
      width: auto;
    }
  }

  .label-txt {
    line-height: 1;
    white-space: nowrap;
    color: #474747;
    text-align: center;
    font-weight: 700;
  }

  ${({size}) => linkSize[size]}
`
