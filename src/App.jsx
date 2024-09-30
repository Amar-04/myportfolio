import React from "react";
import Home from "./pages/Home";
import CafeManagement from "./pages/CafeManagement";
import ShippingCalculator from "./pages/ShippingCalculator";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cafe" element={<CafeManagement></CafeManagement>}></Route>
      <Route path="/shipping" element={<ShippingCalculator></ShippingCalculator>}></Route>
    </Routes>
  );
};

export default App;
