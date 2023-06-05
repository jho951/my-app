import {useRouter} from "next/router"
import {CustomButton} from "../../atoms/button/Button"

export const LinkText = ({link, className}) => {
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
    link &&
    link?.map((destination) => (
      <CustomButton
        className={className}
        key={destination?.id}
        onClick={(e) => handleClick(e, destination?.href)}
      >
        {destination.label}
      </CustomButton>
    ))
  )
}
