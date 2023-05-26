Next.Js 템플릿입니다.

<h1> <b>1. 이미지 최적화 렌더링</n> 템플릿 화 </b></h1> 
 <h4>next image 적용</h4>
 <h5>image 압축</h5>

<h1> <b>2. 헤더 적용</n> 템플릿 화 </b></h1>
<h4>next head 를 통해 seo를 위한 동적인 meta 태그 적용</h4>

<h1> <b>3. Poratal를 이용한 tooltip과 modal</n> 템플릿 화 </b></h1>

<h1> <b>4. className을 통해 UI/UX에 필요한 solid-button, outline-button, text-button</n> 템플릿 화 </b></h1>

참고 https://web.dev/learn/design/internationalization/
https://beta.nextjs.org/docs/rendering/server-and-client-components
https://devkkiri.com/post/59cb38dd-f939-462d-9e7f-afcc338b621f

import imageCompression from "browser-image-compression"

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
