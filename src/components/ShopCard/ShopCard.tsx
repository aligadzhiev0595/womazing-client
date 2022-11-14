import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import s from './ShopCard.module.scss'

interface ShopCardProps {
  id: number
  title: string
  img: string
  price: number
  priceSale: number
  inStock: number
  category: string
}

export const ShopCard = ({
  id,
  title,
  img,
  price,
  priceSale,
  inStock,
}: ShopCardProps) => {
  const { t } = useTranslation()

  return (
    <div className='col col-4 col-md-6'>
      <div className={s.card}>
        <Link className={s.cardLink} to={`/shop/${id}`}>
          <img className={s.cardImg} src={img} alt='' />
        </Link>
        <h3 className={s.titleCard}>{title}</h3>
        <p className={s.priceCard}>
          {priceSale ? (
            <>
              <span style={{ textDecoration: 'line-through' }}>${price}</span>
              <span className='ml-5 mr-5'>-</span>
              <span>${priceSale}</span>
            </>
          ) : (
            <span>${price}</span>
          )}
        </p>
        {inStock ? (
          <p className={s.inStock}>
            {t(`shop.est`)}
            <span>{inStock}</span> <span>{t(`shop.par`)}</span>
          </p>
        ) : (
          <p className={s.inStock}>{t(`shop.noScock`)}</p>
        )}
      </div>
    </div>
  )
}
