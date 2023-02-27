"useclient"
import React from "react"
import Image from "next/image"
import PageHead from "../../components/atoms/Head/PageHead"
import Button from "../../components/atoms/button/button"

export default function Test() {
  return (
    <React.Fragment>
      {/* head 추가 */}
      <PageHead
        title='이미지'
        desrciption='테스트'
        seo='테스트'
        keyword='image'
      />
      <div style={{display: "flex", flexWrap: "wrap"}}>
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
    </React.Fragment>
  )
}
