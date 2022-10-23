import { NavLink } from "react-router-dom";

import logo from '../../assets/icons/logo.svg'
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
       <ul>
        <li className={s.logo}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        </li>
       </ul>
      </div>
    </footer>
  );
};
