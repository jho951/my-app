import React from "react"
import {useRouter} from "next/router"
import Link from "next/link"

export function CustomList({menus, children, onMouseEnter, onMouseLeave}) {
  const router = useRouter()

  return (
    <React.Fragment>
      {menus?.map((menu) => {
        const listItem = (
          <li
            key={menu?.id}
            className={router.pathname === menu?.href ? "active" : ""}
          >
            {menu.label}
          </li>
        )

        return menu.href ? (
          <Link
            role='tab'
            href={menu.href}
            key={menu.id}
            passHref
            onMouseEnter={
              onMouseEnter ? () => onMouseEnter(menu.id) : undefined
            }
            onMouseLeave={onMouseLeave ? onMouseLeave : undefined}
          >
            {listItem}
          </Link>
        ) : (
          listItem
        )
      })}
      {children}
    </React.Fragment>
  )
}
