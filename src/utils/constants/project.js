import {S3_BUCKET} from "./api"

// 프로젝트 이름
const PROJECT_NAME = `happy-medion`

// public 이미지 경로
const IMG_PATH = "/images"

// 기본 이미지 url
const PUBLIC_IMG_URL = `https://s3.ap-northeast-2.amazonaws.com/${S3_BUCKET}/`

// gnb 메누 리스트
const GNB_MENU = [
  {id: "info", label: "회사소개", href: "/info"},
  {id: "category", label: "병원", href: "/category"},
  {id: "service", label: "의료서비스", href: "/service"},
  {id: "mypage", label: "공지사항", href: "/mypage"},
  {id: "news", label: "자주묻는질문", href: "/news"},
]

// fnb 리스트
const FNB_MENU = [
  {id: 1, label: "About Us", href: "/menu1"},
  {id: 2, label: "Terms", href: "/menu2"},
  {id: 3, label: "Privacy Policy", href: "/menu3"},
  {id: 4, label: "FAQ", href: "/menu4"},
  {id: 5, label: "Contact Us", href: "/contact"},
]

export {PROJECT_NAME, IMG_PATH, PUBLIC_IMG_URL, GNB_MENU, FNB_MENU}
