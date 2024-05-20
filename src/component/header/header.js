import React from "react";
import "../header/header.css";
import "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
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
              <div className="selectdrop cursor poistion-relative">
                AllCatergories
                <Select />
              </div>
              <div className="search">
                <input type="text" placeholder="search for items..." />
                <SearchIcon className="SearchIcon cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
