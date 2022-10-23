import s from "./Benefits.module.scss";


interface BenefitsCardProp {
  img: string
  title: string
  desc: string
}

export const BenefitsCard = ({ img, title, desc }: BenefitsCardProp) => {
  return (
    <>
      <div className="col col-4 col-md-12">
        <div>
          <img src={img} alt={title} />
          <h6 className={s.titleCard} >{title}</h6>
          <p className={s.descCard} >{desc}</p>
        </div>
      </div>
    </>
  );
};
