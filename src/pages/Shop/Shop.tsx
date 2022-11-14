import {
  Pagination,
  ShopCard,
  ShopSelect,
  FilterButtons,
} from '../../components'
import { Breadcrumbs } from '../../components'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../redux/redux.hooks'

import s from './Shop.module.scss'

export const Shop = () => {
  const { t } = useTranslation()
  const products = useAppSelector((s) => s.products.productsData)
  const status = useAppSelector((s) => s.products.status)
  const sorting = useAppSelector((s) => s.products.sorting)
  const page = useAppSelector((s) => s.products.pageNumber)
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
          <FilterButtons />
          <ShopSelect />
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
