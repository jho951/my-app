"useclient"
import React from "react"
import PageHead from "../components/atoms/Head/PageHead"
import {Input} from "../components/atoms/Input/Input.styled"

// import ModalUtils from "../utils/Modal/ModalUtils"

export default function MyComponent() {
  // const transition = document.querySelector(".transition")
  // transition.addEventListener("click", handleClick)
  // function handleClick() {
  //   transition?.classList.toggle("close")
  // }
  // const {modalOpen, handleOpenModal, handleCloseModal} = ModalUtils()

  return (
    <React.Fragment>
      <PageHead
        title='헤더 테스트 중'
        description='테스트'
        keyword='테스트, next.js'
      />
      <Input type='password' name='테스트' label={"테스트"} />
    </React.Fragment>
  )
}
