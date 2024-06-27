import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ cart, setCart }) => {
  const [_cart, _setCart] = useState([]);

  useEffect(() => {
    // console.log("Outlet works!");
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
