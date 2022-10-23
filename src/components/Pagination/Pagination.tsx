
import s from "./Pagination.module.scss";

interface PaginationProps{
  totalItems:any
  paginate:any
  prevPage:() => void
  nextPage:() => void
}

export const Pagination = ({ totalItems, paginate, prevPage, nextPage }:PaginationProps) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalItems / 6); i++) {
    pageNum.push(i);
  }
  return (
    <div>
      <ul className={s.pagination}>
        <li>
          <button className={s.btnPrev} onClick={prevPage}></button>
        </li>
        {pageNum.map((el) => (
          <li
            className={s.paginationItem}
            onClick={() => paginate(el)}
            key={el}
          >
            {el}
          </li>
        ))}
        <li>
          <button className={s.btnNext} onClick={nextPage}></button>
        </li>
      </ul>
    </div>
  );
};
