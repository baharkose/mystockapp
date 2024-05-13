import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import PurchasesIcon from "../../assets/icons/PurchasesIcon";
import SalesIcon from "../../assets/icons/SalesIcon";
import FirmsIcon from "../../assets/icons/FirmsIcon";
import BrandsIcon from "../../assets/icons/BrandsIcon";
import ProductsIcon from "../../assets/icons/ProductsIcon";

const MenuListItems = () => {
  const navigate = useNavigate();
  // ! menüleri otomatik olarak tanımlayabilemek için json formatına çevirdik.
  const icons = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/stock/",
    },
    {
      name: "Purchases",
      icon: <PurchasesIcon />,
      link: "/stock/purchases",
    },
    {
      name: "Sales",
      icon: <SalesIcon />,
      link: "/stock/sales",
    },
    {
      name: "Firms",
      icon: <FirmsIcon />,
      link: "/stock/firms",
    },
    {
      name: "Brands",
      icon: <BrandsIcon />,
      link: "/stock/brands",
    },
    {
      name: "Products",
      icon: <ProductsIcon />,
      link: "/stock/products",
    },
  ];

  return (
    <>
      {/* drawer component */}
      <div
        id="drawer-navigation"
        className="fixed top-15 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800 visible"
        tabIndex={-1}
        //   translate x full görünmezliğe neden oluyor
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {icons.map((item, index) => (
              <li key={index} onClick={() => navigate(item.url)}>
                <a
                  href={item.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-sky-800 dark:hover:bg-gray-700 group"
                >
                  {item.icon}
                  {/* Dinamik olarak render */}
                  <span>{(" ", item.name)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuListItems;
