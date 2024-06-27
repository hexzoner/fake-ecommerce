import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function CartItem({ product, update, setUpdate }) {
  //   console.log(product);
  const [cartProduct, setCartProduct] = useState(product);
  const { _cart, _setCart } = useOutletContext();

  function onRemove() {
    if (product.qty > 0) {
      const a = _cart.slice();
      const found = a.find((x) => x.product.id === cartProduct.product.id);
      if (cartProduct.qty - 1 > 0) {
        a[a.indexOf(found)] = { product: cartProduct.product, qty: cartProduct.qty - 1 };
        setCartProduct({ product: cartProduct.product, qty: cartProduct.qty - 1 });
      } else a.splice(a.indexOf(found), 1);

      _setCart(a);
      setUpdate(!update);
    }
  }

  return (
    <div className="">
      <div className="rounded-lg relative h-[200px] text-base-100 bg-base-content flex max-w-[1000px] m-auto bg-base-200  items-center ">
        <div className="bg-white w-[220px]">
          <img className=" m-auto h-[200px] object-scale-down" src={cartProduct.product.image} alt="" />
        </div>

        <div className="w-[80%] bg-base-300 pl-6 pt-2 flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <p className="text-base-content font-bold">{product.product.title}</p>
            <button onClick={onRemove} className=" h-[36px] rounded-lg px-4 bg-primary text-primary-content hover:bg-error">
              Remove
            </button>
          </div>
          <p className="text-error font-bold text-lg">
            ${cartProduct.product.price} x {cartProduct.qty}
          </p>
          <p className="text-base-content overflow-hidden pr-4 pb-2">{cartProduct.product.description}</p>
        </div>
      </div>
    </div>
  );
}
