import {useContext} from "react"
import {LayoutContext} from "./Layout.Styled"
import {ThemeProvider} from "styled-components"
import {GlobalStyle, theme} from "../../styles/GlobalStyled"
import Header from "../Organism/header/Header"
import Footer from "../Organism/footer/Footer"
import Main from "../Organism/main/Main"

export const Layout = ({children}) => {
  const {matchese} = useContext(LayoutContext)
  const accountLink = [
    {id: "login", label: "로그인", href: "/login"},
    {id: "join", label: "회원가입", href: "/join"},
  ]
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!matchese ? <Header accountLink={accountLink} /> : <div>모바일</div>}
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}
