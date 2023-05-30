import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import arabicLogo from "./../../assets/images/arabia.png";
import EnglishLogo from "./../../assets/images/english.png";
import AuthService from "../../AuthService";
import { toast } from "react-toastify";

const NavbarBox = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { t } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18n.language);
  };

  const user = AuthService.getCurrentUser();

  const logout = () => {
    AuthService.logout();
    navigate("/login");
    toast.success(`${t('Goodby')}: ${user.user.name}`);
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Task</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <ul>
              <li>
                <Link to="/">{t('Home')}</Link>
              </li>
              {user ? (
                <Fragment>
                  <li>
                    <button onClick={logout}>{t('Logout')}</button>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li>
                    <Link to="/login">{t('Login')}</Link>
                  </li>
                  <li>
                    <Link to="/register">{t('Register')}</Link>
                  </li>
                </Fragment>
              )}
              {i18n.language == "en" || i18n.language == "" ? (
                <li>
                  <button onClick={() => changeLanguage("ar")}>
                    <img src={arabicLogo} style={{ width: "25px" }} />
                  </button>
                </li>
              ) : (
                <li>
                  <button onClick={() => changeLanguage("en")}>
                    <img src={EnglishLogo} style={{ width: "25px" }} />
                  </button>
                </li>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBox;
