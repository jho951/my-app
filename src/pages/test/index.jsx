"useclient"
import React from "react"
import Image from "next/image"
import {PageHead} from "../../components/atoms/Head/pageHead"
import Button from "../../components/atoms/button/button"

export default function Test() {
  return (
    <React.Fragment>
      {/* head 추가 */}
      {/* <PageHead
        title='이미지'
        desrciption='테스트'
        seo='테스트'
        keyword='image'
      /> */}
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {/* 최적화 이미지 */}
        {/* 크기는 아래 두개가 작음 1번쨰가 느림 */}
        {/* responsive */}
        {/* <div className='next-image-div'> */}
        <div
          style={{
            position: "relative",
            display: "block",
            width: "500px",
            height: "500px",
          }}
        >
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/file.galmaetgil.kr/upload/1675992630600.png'
            width={100}
            height={100}
            layout='responsive'
            alt='picture'
            priority
            decoding='async'
            blurDataURL='/blurImg.png'
          />
        </div>
        {/* intrinsic (default) */}

        <Image
          src='https://s3.ap-northeast-2.amazonaws.com/file.galmaetgil.kr/upload/1675992630600.png'
          layout='intrinsic'
          className='my-image'
          width={500}
          height={500}
          alt='image'
          loading='lazy'
          decoding='async'
          blurDataURL='/blurImg.png'
          placeholder='blur'
        />

        {/* fixed */}
      </div>

      <Button className={"btn12"}>
        <span>가가가가</span>
        <span>아아아아</span>
      </Button>
    </React.Fragment>
  )
}
