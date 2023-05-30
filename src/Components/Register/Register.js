import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../AuthService";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    if (name === "" || name === null || name.length <= 4) {
      toast.error(t('CorrectName'));
      return;
    }
    if (phone === "" || phone === null || phone.length < 11) {
      toast.error(t('CorrectPhone'));
      return;
    }
    if (email === "" || email === null) {
      toast.error(t('CorrectEmail'));
      return;
    }
    if (password === "" || password === null || password.length <= 5) {
      toast.error(t('CorrectPassword'));
      return;
    }

    AuthService.register(name, phone, email, password)
      .then((data) => {
        if (data === t('CorrectPasswordTooShort')) {
          toast.error(t('CorrectPasswordTooShort'));
        } else if (data === t('EmailExists')) {
          toast.error(t('EmailExists'));
        } else {
          toast.success(t('AccountAdded'));
          setLoading(false);
          navigate("/login");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Fragment>
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <div className="login-box">
                <h2>{t('Signup')}</h2>
                <form className="login-form" onSubmit={handleRegister}>
                  <div className="quote-item">
                    <span className="lable">{t('Name')}*</span>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="quote-item">
                    <span className="lable">{t('Phone')}*</span>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="quote-item">
                    <span className="lable">{t('Email')}*</span>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="quote-item">
                    <span className="lable">{t('Password')}*</span>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="quote-item">
                    <button type="submit" className="btn-1 btn-3">
                      {t('Submit')}
                    </button>
                  </div>
                  <div className="have-account">
                    {t('DoYouHaveAccount')}
                    <Link to="/login" style={{ marginLeft: "10px" }}>
                      <b>{t('Login')}</b>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
