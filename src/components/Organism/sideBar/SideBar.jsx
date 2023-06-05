import React from "react"
import {CustomButton} from "../../atoms/button/Button"
import {FiPause} from "react-icons/fi"

const SideBar = () => {
  return (
    <div>
      <CustomButton className='icon-btn'>{<FiPause />}</CustomButton>
    </div>
  )
}

export default SideBar
