import React from "react";
import { Link } from "react-router-dom";
import useAuthCalls from "../services/useAuthCalls";

const Navbar = () => {
  const { logout } = useAuthCalls();

  return (
    <>
      <nav className="bg-blue-500 text-white shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <Link to="/" className="text-white text-xl font-semibold">
              StockApp
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/about"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Hakkında
            </Link>
            <Link
              to="/contact"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              İletişim
            </Link>
            <Link
              to="/"
              // logout olduğunda logout fonksiyonunu çalıştır.
              onClick={() => logout()}
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
