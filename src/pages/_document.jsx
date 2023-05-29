import { Main, NextScript, Head, Html } from "next/document";
import HeadComponents from "../components/atoms/Head/HtmlHead";
import { ServerStyleSheet } from "styled-components";

// _document.js 역할
// 1. HTML 문서의 기본 레이아웃을 정의합니다.
// 2. 모든 페이지의 메타 데이터를 설정합니다.
// 3. 서버에서 렌더링 할 때 사용되어 초기 로드 속도를 향상시키고, SEO 최적화 기능을 추가합니다.

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <HeadComponents.DefaultHead />
        <HeadComponents.PageHead />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}
