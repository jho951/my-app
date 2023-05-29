import { S3_BUCKET } from "./api";

// 프로젝트 이름
const PROJECT_NAME = "project";
// public 이미지 경로
const IMG_PATH = "/public/img";
// 기본 이미지 url
const BASE_IMG_URL = `https://s3.ap-northeast-2.amazonaws.com/${S3_BUCKET}/`;

const GNB_MENU = [
  { id: 1, label: "메뉴 1", link: "/menu1" },
  { id: 2, label: "메뉴 2", link: "/menu2" },
  { id: 3, label: "메뉴 3", link: "/menu3" },
  { id: 4, label: "메뉴 4", link: "/menu4" },
  { id: 5, label: "메뉴 5", link: "/menu5" },
];

export { PROJECT_NAME, IMG_PATH, BASE_IMG_URL, GNB_MENU };
