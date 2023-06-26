import { useRouter } from 'next/router';
import Link from 'next/link';

export function CustomList({ menus, children, onMouseEnter, onMouseLeave }) {
  const router = useRouter();

  const handleMouseEnter = (menuId) => {
    if (onMouseEnter) {
      onMouseEnter(menuId);
    }
  };

  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <>
      {menus?.map((menu) => {
        const isActive = router.pathname === menu?.href;

        if (menu?.href) {
          return (
            <Link
              role="tab"
              href={menu.href}
              key={menu.label}
              passHref
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={handleMouseLeave}
            >
              <li key={menu?.label} data-menu-id={menu?.id} className={isActive ? 'active' : ''}>
                {menu?.label}
              </li>
            </Link>
          );
        } else {
          return (
            <li key={menu?.label} data-menu-id={menu?.id} className={isActive ? 'active' : ''}>
              {menu?.label}
            </li>
          );
        }
      })}
      {children}
    </>
  );
}
