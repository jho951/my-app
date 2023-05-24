import CryptoJS from "crypto-js"
const Utf8 = CryptoJS.enc.Utf8
export const encrypt = (data, key) => {
  return CryptoJS.AES.encrypt(data, key).toString()
}

export const decrypt = (text, key) => {
  const bytes = CryptoJS.AES.decrypt(text, key)
  return bytes.toString(Utf8)
}
