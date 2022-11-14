import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import s from './Collection.module.scss'

interface CollectionCardProps {
  img: string
  title: string
  through: ReactElement
}

export const CollectionCard = ({
  img,
  title,
  through,
}: CollectionCardProps) => {
  return (
    <>
      <div className='col col-4 col-md-12'>
        <div className={s.wrapper}>
          <Link to={`/shop`} className={s.cardLink}>
            <img className={s.img} src={img} alt={title} />
          </Link>
          <p className={s.desc}>{title}</p>
          <div className={s.prices}>
            <span className={s.through}>{through}</span>
            <span className={s.price}>$129</span>
          </div>
        </div>
      </div>
    </>
  )
}
