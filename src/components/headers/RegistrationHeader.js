/* import React from "react";
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
 */

import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthModal from "../auth/AuthModal";
import s from "./Header.module.css";
import logo from "./logo.svg";

const RegistrationHeader = () => {
  const [showAuth, setShowAuth] = useState(false);

  const handleShowAuth = () => setShowAuth(true);
  return (
    <>
      <Navbar
        className="flex"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand className={s.back} href="/">
          {/* <img src={logo} /> */}&#x279C;
          {/* <span className={s.invisible_text}>hme</span> */}
        </Navbar.Brand>
        <Navbar.Brand onClick={handleShowAuth}>Войти</Navbar.Brand>
      </Navbar>
      {showAuth && <AuthModal setShow={setShowAuth} show={showAuth} />}
    </>
  );
};

export default RegistrationHeader;
