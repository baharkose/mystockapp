import React from "react";
import { Link } from "react-router-dom";
import useAuthCalls from "../services/useAuthCalls";

const Navbar = () => {
  const { logout } = useAuthCalls();
  return (
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
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="text-center py-10">
          <h1 className="text-5xl font-bold text-gray-800">Hoş Geldiniz!</h1>
          <p className="text-xl text-gray-600 mt-4">
            Tailwind CSS ile Oluşturulmuş Ana Sayfa
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-black">Özellik 1</div>
              <p className="text-gray-500">Bu bir açıklama metnidir.</p>
            </div>
          </div>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-black">Özellik 2</div>
              <p className="text-gray-500">Bu bir açıklama metnidir.</p>
            </div>
          </div>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-black">Özellik 3</div>
              <p className="text-gray-500">Bu bir açıklama metnidir.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
