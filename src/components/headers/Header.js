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

import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
import logo from "./logo.svg";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={s.navbar}
    >
      <Navbar.Brand href="/">
        <img src={logo} />
        <span className={s.invisible_text}>hme</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#main">Главная</Nav.Link>
          <Nav.Link href="#instruction">Как записаться</Nav.Link>
          <Nav.Link href="#contact">Контакты</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Войти</Nav.Link>
          <Nav.Link eventKey={2} href="/register">
            Зарегистрироваться
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
