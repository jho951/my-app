import {S3_BUCKET} from "./api"

// 프로젝트 이름
const PROJECT_NAME = `happy-medion`

// public 이미지 경로
const IMG_PATH = "/images"

// 기본 이미지 url
const PUBLIC_IMG_URL = `https://s3.ap-northeast-2.amazonaws.com/${S3_BUCKET}/`

// gnb 메누 리스트
const GNB_MENU = [
  {
    id: "info",
    label: "회사소개",
    href: "/info",
    api: false,
    children: [
      {label: "대표 인사말", href: "/info/greetings"},
      {title: "오시는 길", href: "/info/map"},
    ],
  },
  {id: "category", label: "병원", href: "/hospital", api: true},
  {id: "service", label: "의료서비스", href: "/service", api: true},
  {
    id: "cummunity",
    label: "커뮤니티",
    href: "/community/notice",
    api: false,
    children: [{label: "자주 묻는 질문", path: "/community/faq"}],
  },
]

// 다국어 국가 이미지
const LanguageCountryImage = [
  {id: "ko", src: `${IMG_PATH}/country/southKorea.png`},
  {id: "en", src: `${IMG_PATH}/country/unitedStates.png`},
  {id: "zh-CN", src: `${IMG_PATH}/country/china.png`},
  {id: "ar", src: `${IMG_PATH}/country/unitedArabEmirates.png`},
]

// fnb 리스트
const FNB_MENU = [
  {id: 1, label: "About Us", href: "/menu1"},
  {id: 2, label: "Terms", href: "/menu2"},
  {id: 3, label: "Privacy Policy", href: "/menu3"},
  {id: 4, label: "FAQ", href: "/menu4"},
  {id: 5, label: "Contact Us", href: "/contact"},
]

// sideBar 리스트
const SIDEBAR = [
  {
    id: 1,
    label: "비자 상담",
    href: "/side1",
    src: `${IMG_PATH}/sideBar/clinicalNotes.png`,
  },
  {
    id: 2,
    label: "챗봇 상담",
    href: "/side2",
    src: `${IMG_PATH}/sideBar/forum.png`,
  },
  {
    id: 3,
    label: "위챗 상담",
    href: "/side1",
    src: `${IMG_PATH}/sideBar/forum.png`,
  },
  {
    id: 4,
    label: "왓츠앱 상담",
    href: "/side1",
    src: `${IMG_PATH}/sideBar/forum.png`,
  },
  {
    id: 5,
    label: "1:1 상담 문의",
    href: "/side1",
    src: `${IMG_PATH}/sideBar/socialDistance.png`,
  },
  {
    id: 6,
    label: "인스타그램",
    href: "/side1",
    src: `${IMG_PATH}/sideBar/Instagram.png`,
  },
]

export {
  PROJECT_NAME,
  IMG_PATH,
  LanguageCountryImage,
  PUBLIC_IMG_URL,
  GNB_MENU,
  FNB_MENU,
  SIDEBAR,
}
