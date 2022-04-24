import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.nav_menu}>
        <li className={s.nav_item}>Home</li>
        <li className={s.nav_item}>Services</li>
        <Link to="/login">
        <li className={s.nav_item}>Log In</li>
        </Link>

        <Link to="/register">
          <li className={s.nav_item}>Registration</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
