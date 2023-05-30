import React, { Fragment } from "react";
import AuthService from "../../AuthService";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HomeContainer = () => {
  const user = AuthService.getCurrentUser();
    const { t } = useTranslation();

  return (
    <Fragment>
      {user ? (
        <Product user={user} />
      ) : (
        <Fragment>
          <div className="container py-100">
            <h3 className="title-product">{t('HomePage.Flag')} <Link to="/login">{t('Login')}</Link></h3>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeContainer;
