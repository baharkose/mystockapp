import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Sales from "../components/Menu/Sales";
import Purchases from "../components/Menu/Purchases";
import Brands from "../components/Menu/Brands";
import Firms from "../components/Menu/Firms";
import Products from "../components/Menu/Products";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
          <Route path="firms" element={<Firms />} />
          <Route path="brands" element={<Brands />} />
          <Route path="purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
