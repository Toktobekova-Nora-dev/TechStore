import React from "react";
import scss from "./SecondSession.module.scss";

const SecondSession = () => {
  return (
    <div className={scss.SecondSession}>
      <div className="container">
        <h1 className={scss.h1}>Browse Categories</h1>
        <p className={scss.p}>
          Find exactly what you need from our wide range of electronic
          categories.
        </p>
        <div className={scss.second}>
          <div className={scss.bord}>
            <div className={scss.box}>
              <img
                src="https://filearchive.cnews.ru/img/news/2021/06/30/pavil600.jpg"
                alt="img"
              />
            </div>
            <h1>laptops</h1>
            <p>products</p>
          </div>

          <div className={scss.bord}>
            <div className={scss.box}>
              <img
                src="https://filearchive.cnews.ru/img/news/2021/06/30/pavil600.jpg"
                alt="img"
              />
            </div>
            <h1>laptops</h1>
            <p>products</p>
          </div>

          <div className={scss.bord}>
            <div className={scss.box}>
              <img
                src="https://filearchive.cnews.ru/img/news/2021/06/30/pavil600.jpg"
                alt="img"
              />
            </div>
            <h1>laptops</h1>
            <p>products</p>
          </div>

          <div className={scss.bord}>
            <div className={scss.box}>
              <img
                src="https://filearchive.cnews.ru/img/news/2021/06/30/pavil600.jpg"
                alt="img"
              />
            </div>
            <h1>laptops</h1>
            <p>products</p>
          </div>

          <div className={scss.bord}>
            <div className={scss.box}>
              <img
                src="https://filearchive.cnews.ru/img/news/2021/06/30/pavil600.jpg"
                alt="img"
              />
            </div>
            <h1>laptops</h1>
            <p>products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSession;
