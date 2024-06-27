import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ cart, setCart }) => {
  // const [_cart, _setCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <div className="font-[lato]">
        <Outlet context={{ cart, setCart }} />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
