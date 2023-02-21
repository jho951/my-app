import DefaultHead from "@/utils/defaultHead"
import {Main, NextScript, Head, Html} from "next/document"
import {ServerStyleSheet} from "styled-components"

export default class MyDocument extends Document {
  static async getServerSideProps(ctx) {
    const sheet = new ServerStyleSheet()
    const html = ReactDOMServer.renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags()
  }

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <DefaultHead />
        </Head>
        <Main />
        <NextScript />
        <footer>푸터입니다.</footer>
      </Html>
    )
  }
}
