import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import Detail from "../components/Detail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Detail />} />
    </Routes>
  );
};

export default Routing;
