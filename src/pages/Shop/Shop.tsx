import { ShopCard } from '../../components'
import { Breadcrumbs } from '../../components'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import s from './Shop.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'
import { getStatus } from '../../redux/productsSlice'

interface ShopProps {
  sort: any
  setSort: (el: any) => void
}
export const Shop = ({
  sort,
  setSort,
}: ShopProps) => {
  const { t } = useTranslation()
  const products = useAppSelector((s) => s.products.productsData)
  const status = useAppSelector((s) => s.products.status)
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
              onClick={() => dispatch(getStatus('all'))}
            >
              {t('shop.all')}
            </li>
            <li
              className={[
                s.tabsItem,
                status === 'sportsuit' ? s.active : '',
              ].join(' ')}
              onClick={() => dispatch(getStatus('sportsuit'))}
            >
              {t('shop.suit')}
            </li>
            <li
              className={[
                s.tabsItem,
                status === 'sweatshirt' ? s.active : '',
              ].join(' ')}
              onClick={() => dispatch(getStatus('sweatshirt'))}
            >
              {t('shop.sweatshirt')}
            </li>
            <li
              className={[s.tabsItem, status === 'tshort' ? s.active : ''].join(
                ' '
              )}
              onClick={() => dispatch(getStatus('tshort'))}
            >
              {t('shop.tshort')}
            </li>
            <li
              className={[s.tabsItem, status === 'hoody' ? s.active : ''].join(
                ' '
              )}
              onClick={() => dispatch(getStatus('hoody'))}
            >
              {t('shop.hoody')}
            </li>
          </ul>
          <div className={s.inner}>
            <select
              className={s.selectTabs}
              onChange={(e) => {
                dispatch(getStatus(e.target.value))
              }}
            >
              <option defaultValue='all' value='all'>
                {t('shop.all')}
              </option>
              <option value='sportsuit'>{t('shop.suit')}</option>
              <option value='sweatshirt'>{t('shop.sweatshirt')}</option>
              <option value='tshort'>{t('shop.tshort')}</option>
              <option value='hoody'>{t('shop.hoody')}</option>
            </select>
            <div>
              <select
                className={s.selectTabs}
                onChange={(e) => {
                  setSort(e.target.value)
                }}
              >
                <option
                  value='big'
                  onClick={() => setSort('big' !== sort ? 'big' : '')}
                >
                  {t('shop.big')}
                </option>
                <option
                  value='less'
                  onClick={() => setSort('less' !== sort ? 'less' : '')}
                >
                  {t('shop.less')}
                </option>
                <option
                  value='discount'
                  onClick={() => setSort('discount' !== sort ? 'discount' : '')}
                >
                  {t('shop.discount')}
                </option>
              </select>
            </div>
            <div className={s.innerBtn}>
              <p>{t('shop.sortTitle')}</p>
              <button
                className={[s.btnSort, sort === 'big' ? s.active : ''].join(
                  ' '
                )}
                onClick={() => setSort('big' !== sort ? 'big' : '')}
              >
                {t('shop.big')}
              </button>
              <button
                className={[s.btnSort, sort === 'less' ? s.active : ''].join(
                  ' '
                )}
                onClick={() => setSort('less' !== sort ? 'less' : '')}
              >
                {t('shop.less')}
              </button>
              <button
                className={[
                  s.btnSort,
                  sort === 'discount' ? s.active : '',
                ].join(' ')}
                onClick={() => setSort('discount' !== sort ? 'discount' : '')}
              >
                {t('shop.discount')}
              </button>
            </div>
          </div>
          <div className='row'>
            {products
              // .sort((a: number, b: number) => {
              //   if (sort === 'big') {
              //     return (b.priceSale || b.price) - (a.priceSale || a.price)
              //   } else if (sort === 'less') {
              //     return (a.priceSale || a.price) - (b.priceSale || b.price)
              //   }
              // })
              .filter((el) => (sort === 'discount' ? el.priceSale : el))
              .filter((item) =>
                status === 'all' ? item : item.category === status
              )
              .map((el: any) => (
                <ShopCard
                  img={`../${el.image[Object.keys(el.image)[0]]}`}
                  {...el}
                  key={el.id}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
