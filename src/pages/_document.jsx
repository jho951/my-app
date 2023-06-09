import Document, {Html, Head, Main, NextScript} from "next/document"
import {ServerStyleSheet} from "styled-components"
import {GlobalStyle} from "../styles/GlobalStyled"
import HeadComponents from "../components/atoms/htmlHead/HtmlHead"
import i18n from "../utils/i18n"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <HeadComponents.DefaultHead />
                <HeadComponents.PageHead />
                {sheet.collectStyles(<App {...props} />)}
              </>
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const {res} = ctx

      if (res && res.locals) {
        res.locals.styles = sheet.getStyleElement()
      }

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang={i18n.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
