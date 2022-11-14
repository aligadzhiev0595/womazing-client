import { getSorting, getStatus } from '../../redux/productsSlice'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'
import { useTranslation } from 'react-i18next'

import s from './ShopSelect.module.scss'
import { useState } from 'react'

export const ShopSelect = () => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const sorting = useAppSelector((s) => s.products.sorting)
  const [firstSelect] = useState([
    {
      defaultValue: 'all',
      value: 'all',
      title: 'shop.all',
    },
    {
      value: 'sportsuit',
      title: 'shop.suit',
    },
    {
      value: 'sweatshirt',
      title: 'shop.sweatshirt',
    },
    {
      value: 'tshort',
      title: 'shop.tshort',
    },
    {
      value: 'hoody',
      title: 'shop.hoody',
    },
  ])
  const [secondSelect] = useState([
    {
      defaultValue: 'sortTitle',
      value: 'sortTitle',
      title: 'shop.sortTitle',
    },
    {
      value: 'big',
      title: 'shop.big',
    },
    {
      value: 'less',
      title: 'shop.less',
    },
    {
      value: 'discount',
      title: 'shop.discount',
    },
  ])
  const sortHandler = () => {
    if (sorting === 'big') {
      dispatch(getSorting('big'))
    } else if (sorting === 'less') {
      dispatch(getSorting('less'))
    } else if (sorting === 'discount') {
      dispatch(getSorting('discount'))
    } else {
      dispatch(getSorting(''))
    }
  }
  return (
    <div className={s.inner}>
      <select
        className={s.selectTabs}
        onChange={(e) => {
          dispatch(getStatus(e.target.value))
        }}
      >
        {firstSelect.map((item, idx) => (
          <option key={idx} value={item.value} defaultValue={item.defaultValue}>
            {t(item.title)}
          </option>
        ))}
      </select>

      <div>
        <select
          className={s.selectTabs}
          onChange={(e) => {
            dispatch(getSorting(e.target.value))
          }}
        >
          {secondSelect.map((item, idx) => (
            <option
              key={idx}
              value={item.value}
              defaultValue={item.defaultValue}
              onClick={() => sortHandler}
            >
              {t(item.title)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
