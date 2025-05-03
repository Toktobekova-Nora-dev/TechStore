import React from "react";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.Header}>Header</div>
      </div>
    </div>
  );
};

export default Header;
