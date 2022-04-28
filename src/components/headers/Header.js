import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import AuthModal from "../auth/AuthModal";
import PersonalRoom from "../home/PersonalRoom";
import RegistModal from "../registration/RegistModal";
import s from "./Header.module.css";
import logo from "./logo.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleShowAuth = () => setShowAuth(true);

  function handleShow() {
    setShow(true);
  }

  const token = localStorage.getItem("token");

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={s.navbar}
      >
        <Nav className={s.invisb}>
          <Nav.Link href="#main"></Nav.Link>
        </Nav>
        <Navbar.Brand href="/">
          <img className={s.logo} src={logo} />
          <span className={s.invisible_text}>hme</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {token === null ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#main">Главная</Nav.Link>
              <Nav.Link href="#instruction">Как записаться</Nav.Link>
              <Nav.Link href="#contact">Контакты</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleShowAuth}>Войти</Nav.Link>
              <Nav.Link eventKey={2} onClick={handleShow}>
                Зарегистрироваться
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#main">Главная</Nav.Link>
                <Nav.Link href="#instruction">Как записаться</Nav.Link>
                <Nav.Link href="#contact">Контакты</Nav.Link>
              </Nav>
            </Navbar.Collapse>{" "}
            <Navbar.Brand>
              <PersonalRoom />
            </Navbar.Brand>
          </>
        )}
      </Navbar>
      {show && (
        <RegistModal setShow={setShow} show={show} setShowAuth={setShowAuth} />
      )}
      {showAuth && <AuthModal setShow={setShowAuth} show={showAuth} />}
    </>
  );
};

export default Header;
