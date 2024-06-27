import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
const key = "fake-ecommerce-cart";

const MainLayout = () => {
  const [_cart, _setCart] = useState([]);

  useEffect(() => {
    _setCart(JSON.parse(localStorage.getItem(key)) || []);
  }, []);

  useEffect(() => {
    // console.log("Outlet works!");
    // localStorage.setItem(key, JSON.stringify(_cart));
  }, [_cart]);

  return (
    <>
      <Header cart={_cart} />
      <div className="font-[lato]">
        <Outlet context={{ _cart, _setCart }} />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
