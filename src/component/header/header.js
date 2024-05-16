import React from "react";
import "../header/header.css";
import "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div class="row">
          <div class="col-sm-2">
            <image src={Logo} />
          </div>
          <div className="col-sm-5">
            <div className="headerSearch d-flex align-items-center">
              <div className="selectdrop">AllCatergories</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
