import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ cart, setCart }) => {
  return (
    <>
      <Header cart={cart} />
      <div className="font-[lato]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
