import {ThemeProvider} from "styled-components"
import {GlobalStyle, theme} from "../../styles/GlobalStyled"
import Header from "../Organism/header/Header"
import Footer from "../Organism/footer/Footer"

export const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
