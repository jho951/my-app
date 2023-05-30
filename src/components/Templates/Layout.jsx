import {ThemeProvider} from "styled-components"
import {theme} from "../../utils/constants/colors"
import {GlobalStyle} from "../../styles/GlobalStyled"
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
