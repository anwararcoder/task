import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../AuthService";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === "" || email === null) {
      toast.error(t('CorrectEmail'));
      return;
    }
    if (password === "" || password === null || password.length <= 5) {
      toast.error(t('CorrectPassword'));
      return;
    }
    AuthService.login(email, password)
      .then((data) => {
        if (data === `${t('CannotFindUser')}` || data === `${t('IncorrectPassword')}`) {
          toast.error(`${t('UserOrPasswordIncorrect')}`);
          setLoading(true);
        } else {
          toast.success(`${t('Welcome')}: ${data.user.name}`);
          setLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error);
        setLoading(true);
      });
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="login-box">
              <h2>{t('Login')}</h2>
              <form className="login-form" onSubmit={handleLogin}>
                <div className="quote-item">
                  <span className="lable">{t('Email')}*</span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="quote-item">
                  <span className="lable">{t('Password')}*</span>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="quote-item">
                  <button type="submit" className="btn-1 btn-3">
                  {t('Submit')}
                  </button>
                </div>
                <div className="have-account">
                  {t('HaveAccount')}
                  <Link to="/register" style={{ marginLeft: "10px" }}>
                    <b>{t('Signup')}</b>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
