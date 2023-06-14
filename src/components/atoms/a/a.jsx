import axios from "axios"

// WeChat API 요청 보내기 함수
export async function sendWeChatAPIRequest(endpoint, params) {
  const API_URL = "https://api.wechat.com" // WeChat API 엔드포인트 URL

  try {
    const response = await axios.get(`${API_URL}/${endpoint}`, {params})
    console.log(response.data) // API 응답 처리
  } catch (error) {
    console.error(error)
  }
}
