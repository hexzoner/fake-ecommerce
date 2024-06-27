import React, { useEffect } from "react";
import Themes from "./Themes";
import { NavLink } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";

export default function Header({ cart }) {
  // const { _cart, _setCart } = useOutletContext();
  useEffect(() => {
    // console.log("hi from header");
  }, [cart]);

  return (
    <div className="navbar bg-base-300 ">
      <div className="max-w-[700px] m-auto w-full">
        <div className="flex gap-2 items-center flex-wrap justify-around w-full">
          <a className="btn btn-ghost text-xl">daisyUI</a>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-base-100 bg-base-content px-4 py-1 rounded-lg" : "px-4 py-1")}>
            <p className="text-lg">Home</p>
          </NavLink>
          <NavLink to="cart" className={({ isActive }) => (isActive ? "text-base-100 bg-base-content px-5 py-1 rounded-lg" : "px-5 py-1 ")}>
            <div className="relative">
              <p className="text-lg ">Cart</p>
              {cart && cart.length > 0 && <p className="absolute bg-accent rounded-full px-2 bottom-4 left-10 text-accent-content">{cart.length}</p>}
            </div>
          </NavLink>
          <Themes></Themes>
        </div>
      </div>
    </div>
  );
}
