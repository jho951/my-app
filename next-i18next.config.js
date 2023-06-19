/** i18 locales 언어 추가 */

const HttpBackend = require("i18next-http-backend/cjs")
const ChainedBackend = require("i18next-chained-backend").default

module.exports = {
  backend: {
    backendOptions: [
      {
        loadPath() {
          return `http://localhost:3001/common.json`
        },
      },
    ],
    backends: typeof window !== "undefined" ? [HttpBackend] : [],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
    localeDetection: false,
    ns: [
      "common",
      "join",
      "community",
      "login",
      "mypage",
      "payment",
      "product",
    ],
  },
  serializeConfig: false,
  use: typeof window !== "undefined" ? [ChainedBackend] : [],
}
