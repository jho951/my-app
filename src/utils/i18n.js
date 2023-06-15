import i18next from "i18next"

const languages = ["ko", "en"]
i18next.init({
  fallbackLng: "ko",
  debug: true,
  lng: "en",
  resource: {
    en: {
      translation: {
        key: "hi",
        look: {
          deeper: "some deep key",
        },
      },
    },
    ko: {
      translation: {
        key: "안녕하세요",
      },
    },
  },
})

export default i18next

const ret = i18next.t("look.deeper")
// .use(Backend)
// .use(initReactI18next)
// import {initReactI18next} from "react-i18next"
// import Backend from "i18next-http-backend"
