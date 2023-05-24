import styled from "styled-components"

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`

const TooltipBox = styled.div`
  position: absolute;
  display: inline-block;
  padding: 0.5rem;
  font-size: 0.875rem;
  background-color: #ffffff;
  color: #d9d9d9;
  border-radius: 3px;

  ${({position}) => {
    switch (position) {
      case "bottom":
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 0.25rem;
        `
      case "left":
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          margin-right: 0.25rem;
        `
      case "right":
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 0.25rem;
        `
      default:
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 0.25rem;
        `
    }
  }}
`

const TooltipText = styled.div`
  display: block;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: var(--tooltip-width);
`
const TooltipArrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent;
  ${({position}) => {
    switch (position) {
      case "bottom":
        return `
            top: -1px;
            left: 50%;
            transform: translateX(-50%);
            border-top-color: #444;
          `
      case "left":
        return `
            top: 50%;
            right: -1px;
            transform: translateY(-50%);
            border-right-color: #444;
          `
      case "right":
        return `
            top: 50%;
            left: -1px;
            transform: translateY(-50%);
            border-left-color: #444;
          `
      default:
        return `
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%);
            border-bottom-color: #444;
          `
    }
  }}
`

export {TooltipContainer, TooltipBox, TooltipText, TooltipArrow}
