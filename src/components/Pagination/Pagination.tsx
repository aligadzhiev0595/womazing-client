import { getPage } from '../../redux/productsSlice'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'

import s from './Pagination.module.scss'

export const Pagination = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector((s) => s.products.pageNumber)
  const products = useAppSelector((s) => s.products.productsData)

  const paginate = (item: number) => dispatch(getPage(item))
  const nextPage = () => dispatch(getPage(page + 1))
  const prevPage = () => dispatch(getPage(page - 1))
  const pageNum = []
  for (let i = 1; i <= Math.ceil(products.length / 6); i++) {
    pageNum.push(i)
  }
  return (
    <div>
      <ul className={s.pagination}>
        <li>
          <button className={s.btnPrev} onClick={prevPage}></button>
        </li>
        {pageNum.map((item, idx) => (
          <li
            className={[
              s.paginationItem,
              page === idx + 1 ? s.active : '',
            ].join(' ')}
            onClick={() => paginate(item)}
            key={item}
          >
            {item}
          </li>
        ))}
        <li>
          <button className={s.btnNext} onClick={nextPage}></button>
        </li>
      </ul>
    </div>
  )
}
