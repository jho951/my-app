import axios from "axios"

export async function fetchTranslation(locale) {
  try {
    const response = await axios.get(
      `http://localhost:3001/translations?lang=${locale}`
    )
    return response.data
  } catch (error) {
    console.error("Error fetching translations:", error)
    return {}
  }
}
// const ret = i18next.t("look.deeper")
// // .use(Backend)
// // .use(initReactI18next)
// // import {initReactI18next} from "react-i18next"
// // import Backend from "i18next-http-backend"
