import React from "react";
import DashboardIcon from "../assets/icons/DashboardIcon";
import PurchasesIcon from "../assets/icons/PurchasesIcon";
import SalesIcon from "../assets/icons/SalesIcon";
import FirmsIcon from "../assets/icons/FirmsIcon";
import BrandsIcon from "../assets/icons/BrandsIcon";
import ProductsIcon from "../assets/icons/ProductsIcon";

const MenuListItems = () => {
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
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {icons.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
