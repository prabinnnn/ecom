import React, { useState } from "react";
import "../selectDrop/select.css";
const select = () => {
  const [isOpenSelect,setisOpenSelect]=useState(false)
  return (
    <div className="selectdropwrapper cursor poistion-relative">
                <span className="openSelect">AllCatergories</span>
                {
                  isOpenSelect === true && 
                  <div className="SelectDrop">
                  <div className="SearchField">
                    <input type="text" />
                  </div>
                  <ul className="SearchResults">
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                    <li>Milk and Dairies</li>
                  </ul>
                </div>
                }
  
    </div>
  );
};
export default select;
