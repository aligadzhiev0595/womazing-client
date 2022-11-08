import { Pagination, ShopCard } from '../../components'
import { Breadcrumbs } from '../../components'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import s from './Shop.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'
import { getStatus, getPage } from '../../redux/productsSlice'
import { ShopSelect } from '../../components/ShopSelect/ShopSelect'

export const Shop = () => {
  const { t } = useTranslation()
  const products = useAppSelector((s) => s.products.productsData)
  const status = useAppSelector((s) => s.products.status)
  const sorting = useAppSelector((s) => s.products.sorting)
  const page = useAppSelector((s) => s.products.pageNumber)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  return (
    <main>
      <section className={s.shop}>
        <div className='container'>
          <h2
            className={s.title}
            dangerouslySetInnerHTML={{ __html: t('shop.about.title') }}
          />
          <Breadcrumbs pathname={pathname} />
          <ul className={s.tabsBar}>
            <li
              className={[s.tabsItem, status === 'all' ? s.active : ''].join(
                ' '
              )}
              onClick={() => dispatch(getStatus('all')) && dispatch(getPage(1))}
            >
              {t('shop.all')}
            </li>
            <li
              className={[
                s.tabsItem,
                status === 'sportsuit' ? s.active : '',
              ].join(' ')}
              onClick={() =>
                dispatch(getStatus('sportsuit')) && dispatch(getPage(1))
              }
            >
              {t('shop.suit')}
            </li>
            <li
              className={[
                s.tabsItem,
                status === 'sweatshirt' ? s.active : '',
              ].join(' ')}
              onClick={() =>
                dispatch(getStatus('sweatshirt')) && dispatch(getPage(1))
              }
            >
              {t('shop.sweatshirt')}
            </li>
            <li
              className={[s.tabsItem, status === 'tshort' ? s.active : ''].join(
                ' '
              )}
              onClick={() =>
                dispatch(getStatus('tshort')) && dispatch(getPage(1))
              }
            >
              {t('shop.tshort')}
            </li>
            <li
              className={[s.tabsItem, status === 'hoody' ? s.active : ''].join(
                ' '
              )}
              onClick={() =>
                dispatch(getStatus('hoody')) && dispatch(getPage(1))
              }
            >
              {t('shop.hoody')}
            </li>
          </ul>
        <ShopSelect/>
          <div className='row'>
            {products
              .filter((el) => (sorting === 'discount' ? el.priceSale : el))
              .sort((a, b) => {
                if (sorting === 'big') {
                  return (a.priceSale || a.price) > (b.priceSale || b.price)
                    ? 1
                    : -1
                }
                if (sorting === 'less') {
                  return (a.priceSale || a.price) < (b.priceSale || b.price)
                    ? 1
                    : -1
                }
                return 0
              })
              .filter((item) =>
                status === 'all' ? item : item.category === status
              )
              .filter((item, idx) => {
                return idx + 1 <= page * 6 && idx >= page * 6 - 6
              })
              .map((el: any) => (
                <ShopCard
                  img={`../${el.image[Object.keys(el.image)[0]]}`}
                  {...el}
                  key={el.id}
                />
              ))}
          </div>
          <Pagination />
        </div>
      </section>
    </main>
  )
}
