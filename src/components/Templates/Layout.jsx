import {useContext} from "react"
import {useRouter} from "next/router"
import {LayoutContext} from "./Layout.Styled"
import {ThemeProvider} from "styled-components"
import {GlobalStyle, theme} from "../../styles/GlobalStyled"
import Footer from "../Organism/footer/Footer"
import Main from "../Organism/main/Main"
import {CustomButton} from "../atoms/button/Button"
import {skipNavigation} from "../../utils/utils"
import Header from "../organism/header/Header"

export const Layout = ({children}) => {
  const {matchese} = useContext(LayoutContext)
  const router = useRouter()

  const accountLink = [
    {id: "login", label: "로그인", href: "/login"},
    {id: "join", label: "회원가입", href: "/join"},
  ]
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* 메인 페이지에서만 skip-navigation 버튼 존재 */}
      {router.pathname === "/" && (
        <CustomButton type='skip' onClick={() => skipNavigation("main")}>
          <p>병원</p>
        </CustomButton>
      )}
      {!matchese ? <Header accountLink={accountLink} /> : <div>모바일</div>}
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}
