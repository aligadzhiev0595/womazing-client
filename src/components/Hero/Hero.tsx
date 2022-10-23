import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import heroImg from "../../assets/image/hero/home.png";

import s from "./Hero.module.scss";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={s.hero}>
      <div className="container">
        <div className="row">
          <div className="col col-6 col-sm-12 ">
            <div className={s.wrapperLeft}>
              <h1 dangerouslySetInnerHTML={{ __html: t("home.title") }} />
              <p dangerouslySetInnerHTML={{ __html: t("home.desc") }} />
              <Link to={`/shop`}>
                <div className={s.btns}>
                  <button className={s.btnF}>
                    <BsArrowDown />
                  </button>
                  <button className={s.btnS}>{t("home.btnText")}</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className={s.wrapperRight}>
              <img src={heroImg} alt="girl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
