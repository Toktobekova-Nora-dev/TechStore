import LayoutAdmin from "@/components/adminStore/LayoutAdmin";
import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const layout: FC<ILayout> = ({ children }) => {
  return <LayoutAdmin>{children}</LayoutAdmin>;
};

export default layout;
