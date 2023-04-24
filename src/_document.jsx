import {Main, NextScript, Head, Html} from "next/document"
import DefaultHead from "./components/atoms/Head/Defaulthead"
import PageHead from "./components/atoms/Head/PageHead"

// _document.js 역할
// 1. HTML 문서의 기본 레이아웃을 정의합니다.
// 2. 모든 페이지의 메타 데이터를 설정합니다.
// 3. 서버에서 렌더링 할 때 사용되어 초기 로드 속도를 향상시키고, SEO 최적화 기능을 추가합니다.

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          {/* 공통 메타 태그 컴퍼넌트입니다. */}
          <DefaultHead />
          {/* 동적 데이터 관련 메타 태그 컴퍼넌트입니다. */}
          <PageHead />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
