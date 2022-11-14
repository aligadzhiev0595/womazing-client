import { getStatus, getPage, getSorting } from '../../redux/productsSlice'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'
import { useTranslation } from 'react-i18next'

import s from './FilterButtons.module.scss'

export const FilterButtons = () => {
  const { t } = useTranslation()

  const status = useAppSelector((s) => s.products.status)
  const sorting = useAppSelector((s) => s.products.sorting)
  const dispatch = useAppDispatch()

  return (
    <>
      <ul className={s.tabsBar}>
        <li
          className={[s.tabsItem, status === 'all' ? s.active : ''].join(' ')}
          onClick={() => dispatch(getStatus('all')) && dispatch(getPage(1))}
        >
          {t('shop.all')}
        </li>
        <li
          className={[s.tabsItem, status === 'sportsuit' ? s.active : ''].join(
            ' '
          )}
          onClick={() =>
            dispatch(getStatus('sportsuit')) && dispatch(getPage(1))
          }
        >
          {t('shop.suit')}
        </li>
        <li
          className={[s.tabsItem, status === 'sweatshirt' ? s.active : ''].join(
            ' '
          )}
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
          onClick={() => dispatch(getStatus('tshort')) && dispatch(getPage(1))}
        >
          {t('shop.tshort')}
        </li>
        <li
          className={[s.tabsItem, status === 'hoody' ? s.active : ''].join(' ')}
          onClick={() => dispatch(getStatus('hoody')) && dispatch(getPage(1))}
        >
          {t('shop.hoody')}
        </li>
      </ul>
      <div className={s.innerBtn}>
        <p>{t('shop.sortTitle')}</p>
        <button
          className={[s.btnSort, sorting === 'big' ? s.active : ''].join(' ')}
          onClick={() => dispatch(getSorting(sorting !== 'big' ? 'big' : ''))}
        >
          {t('shop.big')}
        </button>
        <button
          className={[s.btnSort, sorting === 'less' ? s.active : ''].join(' ')}
          onClick={() => dispatch(getSorting(sorting !== 'less' ? 'less' : ''))}
        >
          {t('shop.less')}
        </button>
        <button
          className={[s.btnSort, sorting === 'discount' ? s.active : ''].join(
            ' '
          )}
          onClick={() =>
            dispatch(getSorting(sorting !== 'discount' ? 'discount' : ''))
          }
        >
          {t('shop.discount')}
        </button>
      </div>
    </>
  )
}
