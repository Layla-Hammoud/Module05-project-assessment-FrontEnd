import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/login/LoginPage"
import SignUp from "../pages/sign up/SignUp";
import AllProducts from "../pages/AllProducts/AllProducts";
const AppRoutes = () => {
  return (
      <Routes>
        {/* <Route path="unauthorized" element={<Unauthorized/>}></Route> */}
        <Route path="/" element={<AllProducts />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/single" element={<ProductPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route> */}
      </Routes>
  );
};

export default AppRoutes;
