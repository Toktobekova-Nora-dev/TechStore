import React from "react";
import scss from "./FirestSession.module.scss";
import photo from "../../../../public/img/photoHeader.jpeg";
import Image from "next/image";

const FirestSession = () => {
  return (
    <div className={scss.firestSession}>
      <div className="container">
        <div className={scss.firest}>
          <div className={scss.firstLeft}>
            <h1>
              Latest Tech at Your
              <br /> Fingertips
            </h1>
            <p>
              Discover cutting-edge electronics and gadgets for
              <br /> every need. From smartphones to laptops, we've got
              <br /> you covered.
            </p>
            <div className={scss.child}>
              <button className={scss.firetChild}>Shop Now</button>
              <button className={scss.secondChild}>View Sales</button>
            </div>
          </div>
          <div>
            <Image src={photo} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirestSession;
