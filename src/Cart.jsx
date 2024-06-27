import React, { useEffect } from "react";
import Categories from "./Categories";
import { useState } from "react";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export default function Cart({ categories, setSelectedCategory }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [update, setUpdate] = useState(true);
  const { _cart, _setCart } = useOutletContext();
  useEffect(() => {}, [categories]);

  useEffect(() => {
    let sum = 0;
    for (let item of _cart) sum += item.product.price * item.qty;
    setTotalPrice(sum.toFixed(2));
  }, [_cart, update]);

  //   Navigate("/");

  return (
    <div className="min-h-[85vh] max-w-[1000px] m-auto">
      <Categories categories={categories} setSelectedCategory={setSelectedCategory} />
      <div className="flex justify-between">
        <p className="text-center text-2xl my-6">Total: ${totalPrice}</p>
        {_cart.length > 0 && <button className="btn btn-accent">Checkout</button>}
      </div>
      <div>
        {_cart.length > 0 ? (
          <div className="flex flex-col gap-6">
            {_cart.map((product) => {
              return <CartItem key={product.product.id} product={product} cart={_cart} setCart={_setCart} update={update} setUpdate={setUpdate} />;
            })}
          </div>
        ) : (
          <div className="text-center text-3xl pt-44">Your Cart is empty</div>
        )}
      </div>
    </div>
  );
}
