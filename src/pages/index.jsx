import Banner from "../components/Organism/banner/Banner";
import { PageHead } from "../components/atoms/htmlHead/HtmlHead";

export default function MyComponent() {
  return (
    <>
      {/* <div id='modal-root' /> */}
      {/* <div id='tooltip-root' /> */}
      <PageHead
        title="헤더 테스트 중"
        description="테스트"
        keyword="테스트, next.js"
      />

      <Banner />
      <p>여백 공간</p>
      <p>여백 공간</p>
      <p>여백 공간</p>
      <p>여백 공간</p>
    </>
  );
}

{
  /* <CustomButton className='text-btn' onClick={() => alert("안녕")}>
<span>
  <p>Button</p>
</span>
</CustomButton> */
}
