import React from "react"
import * as AntdIcons from "@ant-design/icons"

const CustomIcon = (props) => {
  const AntdIcon = AntdIcons[props.type + props.theme]
  return AntdIcon ? <AntdIcon {...props} /> : ""
}

export default CustomIcon
