import { capitalize } from "./App";
import { useOutletContext } from "react-router-dom";
const key = "fake-ecommerce-cart";

export default function ProductCard({ product, setSelectedCategory }) {
  const { _cart, _setCart } = useOutletContext();
  function onProductClick(e) {
    // console.log(product.title);
  }

  function onAddToCart(e) {
    const found = _cart.find((x) => x.product.id === product.id);
    // console.log(cart);

    if (found) {
      const a = _cart;
      a[a.indexOf(found)] = { product, qty: found.qty + 1 };
      _setCart(a);
      localStorage.setItem(key, JSON.stringify(a));
      // console.log(a);
    } else {
      _setCart([..._cart, { product, qty: 1 }]);
      localStorage.setItem(key, JSON.stringify([..._cart, { product, qty: 1 }]));
      // console.log([...cart, { product, qty: 1 }]);
    }
  }

  function handleCategoryClick(e) {
    console.log(e.target.textContent);
    setSelectedCategory("/category/" + e.target.textContent.toLowerCase());
  }

  return (
    <div onClick={onProductClick} className="bg-base-300 rounded-lg relative h-[250px]  text-base-100 bg-base-content hover:cursor-pointer">
      <div className="bg-white rounded-t-lg w-[95%] m-auto rounded-lg mt-1">
        <img className="rounded-lg m-auto h-[202px] object-scale-down" src={product.image} alt="" />
      </div>

      {/* <p>{product.title}</p> */}
      <div className="flex justify-between items-center  ">
        <div className="">
          <p className="absolute top-0 text-xs rounded-t-lg font-bold bg-opacity-80 px-4 w-full text-center text-base-100 bg-base-content py-1 ">{product.title}</p>
          <div className="absolute top-[182px] flex justify-between w-full">
            <p className="rounded-lg px-2 bg-opacity-80 text-base-100 bg-base-content ml-2 relative bottom-1">${product.price}</p>
            <div className="relative top-1 mr-2">
              <p className="rounded-lg px-2 bg-opacity-80 text-base-100 bg-base-content text-xs ">
                {product.rating.rate} ({product.rating.count})
              </p>
            </div>
          </div>
          <p onClick={handleCategoryClick} className="hover:cursor-pointer hover:text-error pl-4  text-xs relative top-2">
            {capitalize(product.category)}
          </p>
        </div>
        {/* <p className="text-ellipsis overflow-hidden">{product.description}</p> */}
        <button onClick={onAddToCart} className="btn btn-neutral hover:btn-accent px-3 btn-xs relative top-2 right-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
