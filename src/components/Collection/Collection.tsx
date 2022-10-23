import { CollectionCard } from "./CollectionCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import img1 from "../../assets/image/collection/t-short-1.png";
import img2 from "../../assets/image/collection/t-short-2.png";
import img3 from "../../assets/image/collection/t-short-3.png";
import s from "./Collection.module.scss";

export const Collection = () => {
  const { t } = useTranslation();
  return (
    <section className={s.collection}>
      <div className="container">
        <h2 className={s.title}>{t("collection.title")}</h2>
        <div className="row">
          <CollectionCard
            img={img1}
            title={t("collection.text1")}
            through={<span>$250</span>} // посмотреть типы
          />
          <CollectionCard
            img={img2}
            title={t("collection.text2")}
            through={<span>$250</span>}
          />
          <CollectionCard
            img={img3}
            title={t("collection.text3")}
            through={<span>$250</span>}
          />
          <div className="col col-12">
            <div>
              <Link to="shop">
                <button className={s.btn}>{t("collection.btn")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
