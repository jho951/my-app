"useclient"
import React, {useState} from "react"
import Image from "next/image"
import DefaultHead from "../../utils/defaultHead"
import imageCompression from "browser-image-compression"

export default function Test() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState("")

  const [file, setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState("")
  const customLoader = ({src, width, quality}) => {
    return `https://s3.amazonaws.com/image/${src}?w=${width}&q=${quality}`
  }

  const imageHandleCompress = async (e) => {
    let file = e.target.files[0]
    console.log(e.target.files)
    const options = {
      maxSizeMB: 1,
      maxWidthorHeight: 1000,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(file, options)
      setFile(compressedFile)
      const promise = imageCompression.getDataUrlFromFile(compressedFile)
      promise.then((result) => {
        setFileUrl(result)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
    setSelectedFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }
  return (
    <React.Fragment>
      {/* head 추가 */}
      <DefaultHead
        title='이미지'
        desrciption='테스트'
        seo='테스트'
        keyword='image'
      />
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
            width={800}
            height={800}
            layout='responsive'
            alt='picture'
            priority
            decoding='async'
            blurDataURL='/blurImg.png'
          />
        </div>
        {/* fill */}
        <div className='next-image-div'>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/file.galmaetgil.kr/upload/1675992630600.png'
            alt='A picture'
            loading='lazy'
            decoding='async'
            layout='fill'
            blurDataURL='/blurImg.png'
            placeholder='blur'
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

        <Image
          src='https://s3.ap-northeast-2.amazonaws.com/file.galmaetgil.kr/upload/1675992630600.png'
          layout='fixed'
          width={500}
          height={500}
          alt='image'
          loading='lazy'
          decoding='async'
          blurDataURL='/blurImg.png'
          placeholder='blur'
          sizes='(max-width: 734px) and (min-width: 0px)20vw,(max-width: 1068px) and (min-width: 735px)50vw,(max-width: 1000000px) and (min-width: 1441px)100vw'
        />
      </div>
      <div style={{border: "5px solid pink"}}>
        <input type='file' name='image/*' onChange={handleFileInputChange} />
        {previewSource && (
          <Image src={previewSource} alt='Preview' width={100} height={100} />
        )}
      </div>

      {/* 압축 사용한 Input  */}
      <div style={{border: "5px solid #5781d5"}}>
        <input type='file' accept='image/*' onChange={imageHandleCompress} />
        {fileUrl && (
          <Image src={fileUrl} alt='profile_img' width={100} height={100} />
        )}
      </div>
    </React.Fragment>
  )
}
