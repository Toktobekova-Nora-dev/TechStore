import React, { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import css from "./LayoutStore.module.scss";
interface ILayout {
  children: ReactNode;
}

const LayoutStore: FC<ILayout> = ({ children }) => {
  return (
    <div className={css.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutStore;
