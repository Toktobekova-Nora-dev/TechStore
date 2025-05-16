import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

const LayoutAdmin: FC<ILayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default LayoutAdmin;
