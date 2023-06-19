import React, {useState} from "react"
import Link from "next/link"
import {useTranslation} from "react-i18next"
import {useRouter} from "next/router"
import {LocaleContainer} from "./I18Btn.styled"
import {LanguageCountryImage} from "../../../utils/constants/project"
import {CustomImage} from "../../atoms/image/Image"

const I18Btn = () => {
  const {t} = useTranslation("common")
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen((prev) => !prev)
  }

  const onClose = () => {
    setOpen(false)
  }
  const getCurrentLanguageImage = () => {
    const currentLanguageId = router.locale
    const selectedImage = LanguageCountryImage.find(
      (item) => item.id === currentLanguageId
    )
    return selectedImage ? selectedImage.src : ""
  }

  return (
    <LocaleContainer>
      <figure
        className={`locale-btn ${open ? "active" : ""} icon-btn`}
        onClick={onOpen}
      >
        <CustomImage image={getCurrentLanguageImage()} alt='current-country' />
        <p className='arrow' />
      </figure>
      <div
        className={`locale-bg ${open ? "open" : "close"}`}
        onMouseOver={onClose}
        onFocus={onClose}
      />
      <div className={`locale-bg-block ${open ? "open" : "close"}`} />
      <div className={`locale-select-box ${open ? "open" : "close"}`}>
        {LanguageCountryImage?.map((locale) => (
          <Link
            href={router?.asPath || ""}
            locale={locale?.id}
            key={`locale-${locale?.id}`}
          >
            <CustomImage
              className={t("id") === locale?.id ? "active-btn" : ""}
              image={locale?.src}
              alt='language-country'
            />
          </Link>
        ))}
      </div>
    </LocaleContainer>
  )
}

export default I18Btn
