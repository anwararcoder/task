import { React, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import NavbarBox from "./Components/NavbarBox/NavbarBox";
import { useTranslation } from "react-i18next";

function App() {

  const { i18n } = useTranslation();

  const activeLang = i18n.language == "en" || i18n.language == "" ? "app" : "app active-rtl"

  return (
    <Fragment>
      <div className={activeLang}>
        <NavbarBox />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
