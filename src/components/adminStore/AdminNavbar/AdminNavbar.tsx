import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const AdminNavbar: FC<ILayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminNavbar;
