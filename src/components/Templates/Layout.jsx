import {ThemeProvider} from "styled-components"
import {GlobalStyle, theme} from "../../styles/GlobalStyled"
import Header from "../Organism/header/Header"
import Footer from "../Organism/footer/Footer"
import Main from "../Organism/main/Main"

export const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main children={children} />
      <Footer />
    </ThemeProvider>
  )
}
