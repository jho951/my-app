import {useRouter} from "next/router"
import Link from "next/link"

export function CustomList({menus, children, onMouseEnter, onMouseLeave}) {
  const router = useRouter()

  const handleMouseEnter = (menuId) => {
    if (onMouseEnter) {
      onMouseEnter(menuId)
    }
  }

  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave()
    }
  }

  return (
    <>
      {menus?.map((menu) => {
        const listItem = (
          <li
            key={menu?.label}
            data-menu-id={menu?.id}
            className={router.pathname === menu?.href ? "active" : ""}
          >
            {menu?.label}
          </li>
        )

        if (menu?.href) {
          return (
            <Link
              role='tab'
              href={menu.href}
              key={menu.label}
              passHref
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={handleMouseLeave}
            >
              {listItem}
            </Link>
          )
        } else {
          return listItem
        }
      })}
      {children}
    </>
  )
}
