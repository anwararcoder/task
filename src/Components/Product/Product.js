import React from "react";
import ImageProduct from "./../../assets/images/01_shop.jpg";
import { useTranslation } from "react-i18next";

const Product = ({ user }) => {
  const { t } = useTranslation();


  return (
    <div className="products-details-content py-100">
      <div className="container">
        <ul className="list-details" style={{ textAlign: "center" }}>
          <li>
            {t("Name")} : <span>{user.user.name}</span>
          </li>
          <li>
          {t("Email")} : <span>{user.user.email}</span>
          </li>
          <li>
          {t("Phone")} : <span>{user.user.phone}</span>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-between">
            <div className="img-box">
              <img
                className="img-fluid gallery-item-img"
                src={ImageProduct}
                alt="01 Shop"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-between">
            <div className="text-box">
              <h3 className="title-product">Syringe</h3>
              <div className="item-price">$38.00</div>
              <p className="item-explain">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>
              <div className="item-inputs">
                <input type="number" name="quantity" min="1" max="50" />
                <a className="btn-1 btn-3" href="01_single-product.html">
                  Add To Card
                </a>
              </div>
              <ul className="list-details">
                <li>
                  SKU : <span>003</span>
                </li>
                <li>
                  Category : <span>Cardiology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
