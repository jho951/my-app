import {useRouter} from "next/router"
import {LinkTextWrap} from "./LinkText.styled"

export const LinkText = ({link}) => {
  const router = useRouter()

  // 라우터 이동 함수입니다.
  const handleClick = (e, href) => {
    e.preventDefault()
    const currentUrl = router.asPath
    const targetUrl = href

    if (currentUrl !== targetUrl) {
      router.replace(targetUrl)
    }
  }
  return (
    <LinkTextWrap>
      {link &&
        link.map((destination) => (
          <li
            key={destination?.id}
            onClick={(e) => handleClick(e, destination?.href)}
          >
            {destination.label}
          </li>
        ))}
    </LinkTextWrap>
  )
}
