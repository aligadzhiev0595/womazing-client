import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import s from './Breadcrumbs.module.scss'
interface BreadProps {
  pathname: string
  params?: any
  product?: any
}

export const Breadcrumbs = ({ pathname, params, product }: BreadProps) => {
  const { t } = useTranslation()

  let pathName =
    pathname === '/shop'
      ? t('shop.about.link2')
      : pathname === '/contacts'
      ? t('contacts.crumbs.link2')
      : pathname === '/brands'
      ? t('brands.about.link2')
      : pathname === '/cart'
      ? t('basket.link2')
      : t('shop.about.link2')

  return (
    <>
      <ul className={s.crumbBrands}>
        <li>
          <Link className={s.crumbLink} to='/'>
            {t('contacts.crumbs.link1')}
          </Link>
        </li>
        -
        {pathname === `/shop/${params?.id}` ? (
          <>
            <li className={s.itemLink}>
              <Link className={s.crumbLink} to={'/shop'}>
                {pathName}
              </Link>
            </li>
            -
            <li className={s.itemLink}>
              <Link className={s.crumbLink} to={`${pathname}`}>
                {product.category}
              </Link>
            </li>
            -
            <li className={s.itemLink}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : '')}
                to={`${pathname}`}
              >
                {product.title}
              </NavLink>
            </li>
          </>
        ) : (
          <li className={s.itemLink}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : '')}
              to={`${pathname}`}
            >
              {pathName}
            </NavLink>
          </li>
        )}
      </ul>
    </>
  )
}
