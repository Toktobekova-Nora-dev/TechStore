import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footerMain}>
      <div className="container">
        <div className={scss.footerMaster}>
          <div className={scss.flex1}>
            <h1>TechStore</h1>
            <p>
              Your one-stop shop for the latest electronics and tech
              <br /> products.
            </p>
          </div>
          <div className={scss.flex2}>
            <h1>Quick Links</h1>
            <p>
              Home
              <br />
              Catalog
              <br />
              Admin
            </p>
          </div>
          <div className={scss.flex3}>
            <h1>Contact</h1>
            <p>
              Email: info@techstore.com <br />
              Phone: +1 (555) 123-4567 Address: 123
              <br />
              Tech Street, Digital City
            </p>
          </div>
        </div>
        <hr />
        <p
          style={{
            textAlign: "center",
            color: "#d1d5dbaa",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          © 2025 TechStore. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
