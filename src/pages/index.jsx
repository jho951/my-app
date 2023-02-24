"useclient"
import React from "react"
import {PageHead} from "../components/atoms/Head/pageHead"
import {List} from "../components/atoms/List/list"

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
      {/* <PageHead
        title='헤더 테스트 중'
        description='테스트'
        seo='테스트'
        keyword='테스트, next.js'
      /> */}
      <div class='frame'>
        <button class='custom-btn btn-3'>
          <span>Read More</span>
        </button>
        <button class='custom-btn btn-4'>
          <span>Read More</span>
        </button>
        <button class='custom-btn btn-5'>
          <span>Read More</span>
        </button>
        <button class='custom-btn btn-6'>
          <span>Read More</span>
        </button>
        <button class='custom-btn btn-7'>
          <span>Read More</span>
        </button>
        <button class='custom-btn btn-8'>
          <span>Read More</span>
        </button>
        <button class='custom-btn btn-9'>Read More</button>
        <button class='custom-btn btn-10'>Read More</button>
        <button class='custom-btn btn-11'>
          Read Mor11e<div class='dot'></div>
        </button>
        <button class='custom-btn btn-12'>
          <span>Click!</span>
          <span>Read More</span>
        </button>
        <button class='custom-btn btn-13'>Read More</button>
        <button class='custom-btn btn-14'>Read More</button>
        <button class='custom-btn btn-15'>Read More</button>
        <button class='custom-btn btn-16'>Read More</button>
      </div>
      <List></List>
    </React.Fragment>
  )
}
