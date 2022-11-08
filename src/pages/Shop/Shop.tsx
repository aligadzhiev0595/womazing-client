import { Pagination, ShopCard } from '../../components'
import { Breadcrumbs } from '../../components'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import s from './Shop.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'
import { getSorting, getStatus, getPage } from '../../redux/productsSlice'

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
                  dispatch(getSorting(e.target.value))
                }}
              >
                <option
                  value='big'
                  onClick={() =>
                    dispatch(getSorting('big' !== sorting ? 'big' : ''))
                  }
                >
                  {t('shop.big')}
                </option>
                <option
                  value='less'
                  onClick={() =>
                    dispatch(getSorting('less' !== sorting ? 'less' : ''))
                  }
                >
                  {t('shop.less')}
                </option>
                <option
                  value='discount'
                  onClick={() =>
                    dispatch(
                      getSorting('discount' !== sorting ? 'discount' : '')
                    )
                  }
                >
                  {t('shop.discount')}
                </option>
              </select>
            </div>
            <div className={s.innerBtn}>
              <p>{t('shop.sortTitle')}</p>
              <button
                className={[s.btnSort, sorting === 'big' ? s.active : ''].join(
                  ' '
                )}
                onClick={() =>
                  dispatch(getSorting('big' !== sorting ? 'big' : ''))
                }
              >
                {t('shop.big')}
              </button>
              <button
                className={[s.btnSort, sorting === 'less' ? s.active : ''].join(
                  ' '
                )}
                onClick={() =>
                  dispatch(getSorting('less' !== sorting ? 'less' : ''))
                }
              >
                {t('shop.less')}
              </button>
              <button
                className={[
                  s.btnSort,
                  sorting === 'discount' ? s.active : '',
                ].join(' ')}
                onClick={() =>
                  dispatch(getSorting('discount' !== sorting ? 'discount' : ''))
                }
              >
                {t('shop.discount')}
              </button>
            </div>
          </div>
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
