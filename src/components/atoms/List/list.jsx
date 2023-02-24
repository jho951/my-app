import React from "react"
import {ListWrap, ListContainer} from "./list.styled"

export function List({menus, children}) {
  return (
    <ListWrap>
      <ListContainer>
        {menus?.map((menu) => (
          <li>{menu}</li>
        ))}
        {children}
      </ListContainer>
    </ListWrap>
  )
}