import { useTranslation } from "react-i18next";

import s from "./CartCard.module.scss";

interface CartCardProps {
  img: string
  title: string
  color: string
  size: string
  price: number
  id: number
  removeCart: (id:number) => void
}

export const CartCard = ({
  img,
  title,
  color,
  size,
  price,
  removeCart,
  id,
}: CartCardProps) => {
	const { t } = useTranslation();
  return (
    <div className="col col-4 col-sm-12">
      <div className={s.wrapper}>
			<h4 className={s.wrapperTitle}>{title}</h4>
			<img className={s.wrapperImg} src={img} alt="" />
        <ul className={s.wrapperList}>
          <li className={s.wrapperItemCard}><span>{t("basket.color")}: </span> {color}</li>
          <li className={s.wrapperItemCard}><span>{t("basket.size")}: </span> {size}</li>
          <li className={s.wrapperItemCard}><span>{t("basket.price")}: </span> ${price}</li>
					<li>
            <button className={s.wrapperBtn} onClick={() => removeCart(id)}>
              {t("basket.remove")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
