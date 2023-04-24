import PageHead from "../components/atoms/Head/PageHead"
import {ModalUtils} from "../utils/Modal/ModalUtils"
import Modal from "../components/molecules/Modal/Modal"
import ToolTip from "../components/molecules/ToolTip/ToolTip"
import {useEffect} from "react"

export default function MyComponent() {
  const {handleOpenModal, handleCloseModal, modalOpen} = ModalUtils()

  return (
    <>
      <div id='modal-root' />

      <PageHead
        title='헤더 테스트 중'
        description='테스트'
        keyword='테스트, next.js'
      />

      <button onClick={handleOpenModal}>모달테스트</button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}></Modal>

      <ToolTip
        content='tooltip-testㅁㄴㅇㄹ ㅁㄴㅇㄹ'
        position='right'
        link='http://www.naver.com'
      >
        테스트
      </ToolTip>
      <div id='tooltip-root' />
    </>
  )
}
