import PageHead from "../components/atoms/Head/PageHead"
import {ModalUtils} from "../utils/Modal/ModalUtils"
import Modal from "../components/molecules/Modal/Modal"
import {CustomButton} from "../components/atoms/Button/Button"

export default function MyComponent() {
  const {handleOpenModal, handleCloseModal, modalOpen} = ModalUtils()

  return (
    <>
      {/* <div id='modal-root' />
      <div id='tooltip-root' /> */}
      <PageHead
        title='헤더 테스트 중'
        description='테스트'
        keyword='테스트, next.js'
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "400px",
          alignItems: "center",
        }}
      >
        <CustomButton className='text-btn'>
          <span>
            <p>Button</p>
          </span>
        </CustomButton>
      </div>
    </>
  )
}
