import {useRouter} from "next/router"
import Link from "next/link"
import React from "react"

export function CustomList({menus, children, onMouseEnter, onMouseLeave}) {
  const router = useRouter()

  return (
    <>
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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {listItem}
          </Link>
        ) : (
          listItem
        )
      })}
      {children}
    </>
  )
}
