import React, {useState, useContext} from "react"
import Link from "next/link"
import {useTranslation} from "react-i18next"
import {useRouter} from "next/router"
import {LocaleContainer} from "./I18Btn.styled"
import {LanguageCountryImage} from "../../../utils/constants/project"
import {CustomImage} from "../../atoms/Image/Image"
import {CustomButton} from "../../atoms/button/Button"

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
      <CustomButton
        className={`locale-btn ${open ? "active" : ""} icon-btn`}
        onClick={onOpen}
      >
        <CustomImage
          image={getCurrentLanguageImage()}
          width={24}
          aspectRatio={"1:1"}
        />
        <p className='arrow' />
      </CustomButton>
      <div
        className={`locale-bg ${open ? "open" : "close"}`}
        onMouseOver={onClose}
      />
      <div className={`locale-bg-block ${open ? "open" : "close"}`} />
      <div className={`locale-select-box ${open ? "open" : "close"}`}>
        {LanguageCountryImage?.map((locale) => (
          <Link
            href={router?.asPath || ""}
            locale={locale?.id}
            key={`locale-${locale?.text}`}
          >
            <CustomImage
              className={t("id") === locale?.id ? "active-btn" : ""}
              image={locale?.src}
              width={24}
              aspectRatio={"1:1"}
            />
          </Link>
        ))}
      </div>
    </LocaleContainer>
  )
}

export default I18Btn
