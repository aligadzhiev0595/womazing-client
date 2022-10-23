import { useState } from 'react'
import { ShopCard } from '../../components'
import { Pagination } from '../../components'
import { Breadcrumbs } from '../../components'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import s from './Shop.module.scss'

interface ShopProps {
  items: any
  loading: any
  page: any
  setPage: (el: any) => void
  status: any
  setStatus: (el: any) => void
}
export const Shop = ({
  items,
  loading,
  page,
  setPage,
  status,
  setStatus,
}: ShopProps) => {
  const { t } = useTranslation()

  const [sort, setSort] = useState('')
  const { pathname } = useLocation()

  const showCount = items
      .filter((item: any) =>
        status === 'all' ? item : item.category === status
      )
      .filter((el: any) => (sort === 'discount' ? el.priceSale : el))
      .filter((item: any, idx: any) => {
        return idx + 1 <= page * 6 && idx >= page * 6 - 6
      }).length,
    showCountsLength = items
      .filter((item: any) =>
        status === 'all' ? item : item.category === status
      )
      .filter((el: any) => (sort === 'discount' ? el.priceSale : el)).length

  const paginate = (el: any) => setPage(el)
  const nextPage = () => setPage(page + 1)
  const prevPage = () => setPage(page - 1)

  if (loading) {
    return <h2>LOADING...</h2>
  }

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
              onClick={() => setStatus('all')}
            >
              {t('shop.all')}
            </li>
            <li
              className={[
                s.tabsItem,
                status === 'sportsuit' ? s.active : '',
              ].join(' ')}
              onClick={() => setStatus('sportsuit')}
            >
              {t('shop.suit')}
            </li>
            <li
              className={[
                s.tabsItem,
                status === 'sweatshirt' ? s.active : '',
              ].join(' ')}
              onClick={() => setStatus('sweatshirt')}
            >
              {t('shop.sweatshirt')}
            </li>
            <li
              className={[s.tabsItem, status === 'tshort' ? s.active : ''].join(
                ' '
              )}
              onClick={() => setStatus('tshort')}
            >
              {t('shop.tshort')}
            </li>
            <li
              className={[s.tabsItem, status === 'hoody' ? s.active : ''].join(
                ' '
              )}
              onClick={() => setStatus('hoody')}
            >
              {t('shop.hoody')}
            </li>
          </ul>
          <div className={s.inner}>
            <select
              className={s.selectTabs}
              onChange={(e) => {
                setStatus(e.target.value)
                setPage(1)
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
          <div className={s.countItems}>
            <span>{t(`shop.view`)}</span> <span>{`${showCount}`}</span>{' '}
            <span>{t(`shop.view1`)}</span>
            <span>{`${showCountsLength}`}</span>
            <span>{t(`shop.view2`)}</span>
          </div>
          <div className='row'>
            {items
              .sort((a: any, b: any) => {
                if (sort === 'big') {
                  return (b.priceSale || b.price) - (a.priceSale || a.price)
                } else if (sort === 'less') {
                  return (a.priceSale || a.price) - (b.priceSale || b.price)
                }
              })
              .filter((el: any) => (sort === 'discount' ? el.priceSale : el))
              .filter((item: any) =>
                status === 'all' ? item : item.category === status
              )
              .filter((item: any, idx: any) => {
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
          <Pagination
            totalItems={items.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </section>
    </main>
  )
}
