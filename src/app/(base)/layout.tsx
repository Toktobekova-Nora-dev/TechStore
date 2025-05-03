import LayoutStore from "@/components/layout/LayoutStore";
import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const layout: FC<ILayout> = ({ children }) => {
  return <LayoutStore>{children}</LayoutStore>;
};

export default layout;
