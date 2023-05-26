import {ThemeProvider} from "styled-components"
import GNB from "../Organism/GNB/GNB"
import {GlobalStyle, Theme} from "../../styles/Global/GlobalStyled"

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <GNB />
      {children}
    </ThemeProvider>
  )
}
