import React from "react";

const AdminMain = () => {
  return (
    <div>
      <h1>TechStore</h1>
      <p>Admin Panel</p>
      <nav>
        <a href="/">Dashboard</a>
        <a href="/products">Products</a>
        <a href="/categories">Categories</a>
      </nav>
    </div>
  );
};

export default AdminMain;
