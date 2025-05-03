import React, { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface ILayout {
  children: ReactNode;
}

const LayoutStore: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutStore;
