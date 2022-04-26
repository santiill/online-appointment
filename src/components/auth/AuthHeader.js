import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "../headers/Header.module.css";
import logo from "../headers/logo.svg";
import RegistModal from "../registration/RegistModal";

const AuthHeader = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
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
          <span className={s.invisible_text}>hme</span>
        </Navbar.Brand>
        <Navbar.Brand onClick={handleShow}>Зарегистрироваться</Navbar.Brand>
      </Navbar>
      {show && <RegistModal setShow={setShow} show={show} />}
    </>
  );
};

export default AuthHeader;
