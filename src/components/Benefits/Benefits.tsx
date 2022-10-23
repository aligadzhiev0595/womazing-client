import { useTranslation } from "react-i18next";
import { BenefitsCard } from "./BenefitsCard";


import s from './Benefits.module.scss';
import imgBenefits1 from '../../assets/image/benefits/icon1.png' 
import imgBenefits2 from '../../assets/image/benefits/icon2.png' 
import imgBenefits3 from '../../assets/image/benefits/icon3.png' 

export const Benefits = () => {
  const { t } = useTranslation();
  return (
    <section className={s.benefits}>
      <div className="container">
        <h2 className={s.title}>{t("benefits.title")}</h2>
        <div className="row">
          <BenefitsCard img={imgBenefits1} title={t("benefits.text1")} desc={t("benefits.info1")} />
          <BenefitsCard img={imgBenefits2} title={t("benefits.text2")} desc={t("benefits.info2")} />
          <BenefitsCard img={imgBenefits3} title={t("benefits.text3")} desc={t("benefits.info3")} />
        </div>
      </div>
    </section>
  );
};
