import styled from "styled-components"

export const LabelContainer = styled.label`
  font-size: ${({props}) => props.fontSize || props.theme.fontSize.text};
`
