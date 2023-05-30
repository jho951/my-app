import {S3_BUCKET} from "./api"

// 프로젝트 이름
const PROJECT_NAME = "project"

// public 이미지 경로
const IMG_PATH = "/images"

// 기본 이미지 url
const PUBLIC_IMG_URL = `https://s3.ap-northeast-2.amazonaws.com/${S3_BUCKET}/`

// gnb 메누 리스트
const GNB_MENU = [
  {id: 1, label: "회사소개", href: "/info"},
  {id: 2, label: "병원카테고리", href: "/category"},
  {id: 3, label: "제품서비스", href: "/service"},
  {id: 4, label: "뉴스앤칼럼", href: "/column"},
  {id: 5, label: "마이페이지", href: "/mypage"},
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
