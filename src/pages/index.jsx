"useclient"
import React from "react"
import {PageHead} from "../components/atoms/Head/pageHead"
import {List} from "../components/atoms/List/list"
import {Button} from "../components/atoms/button/button"
import Modal from "../components/atoms/Modal/Modal"
import ModalUtils from "../utils/Modal/ModalUtils"

export default function MyComponent() {
  // const transition = document.querySelector(".transition")
  // transition.addEventListener("click", handleClick)
  // function handleClick() {
  //   transition?.classList.toggle("close")
  // }
  const {modalOpen, handleOpenModal, handleCloseModal} = ModalUtils()

  return (
    <React.Fragment>
      <PageHead
        title='헤더 테스트 중'
        description='테스트'
        seo='테스트'
        keyword='테스트, next.js'
      />
      <List></List>
      <Button onClick={handleOpenModal}>모달 테스트</Button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h1>모달 내용입니다.</h1>
      </Modal>
    </React.Fragment>
  )
}
