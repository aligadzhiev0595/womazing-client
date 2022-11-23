import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../redux/redux.hooks'
import { removeProductCart } from '../../redux/cartSlice'
import axios from 'axios'

import s from './CartCard.module.scss'

interface CartCardProps {
  img: string
  title: string
  color: string
  size: string
  price: number
  _id: number
}

export const CartCard = ({
  img,
  title,
  color,
  size,
  price,
  _id,
}: CartCardProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const removeCart = (_id: number) => {
    axios.delete(`https://womazing-backend.vercel.app/api/cart/${_id}`)
    dispatch(removeProductCart(_id))
  }
  return (
    <div className='col col-4 col-md-6 col-sm-12'>
      <div className={s.wrapper}>
        <h4 className={s.wrapperTitle}>{title}</h4>
        <img className={s.wrapperImg} src={img} alt='cloth' />
        <ul className={s.wrapperList}>
          <li className={s.wrapperItemCard}>
            <span>{t('basket.color')}: </span> {color}
          </li>
          <li className={s.wrapperItemCard}>
            <span>{t('basket.size')}: </span> {size}
          </li>
          <li className={s.wrapperItemCard}>
            <span>{t('basket.price')}: </span> ${price}
          </li>
          <li>
            <button className={s.wrapperBtn} onClick={() => removeCart(_id)}>
              {t('basket.remove')}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
