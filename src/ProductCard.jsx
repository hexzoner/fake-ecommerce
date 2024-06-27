import { capitalize } from "./App";

export default function ProductCard({ product, cart, setCart, setSelectedCategory }) {
  function onProductClick(e) {
    // console.log(product.title);
  }

  function onAddToCart(e) {
    const found = cart.find((x) => x.product.id === product.id);
    // console.log(cart);

    if (found) {
      const a = cart;
      a[a.indexOf(found)] = { product, qty: found.qty + 1 };
      setCart(a);
      // console.log(a);
    } else {
      setCart([...cart, { product, qty: 1 }]);
      // console.log([...cart, { product, qty: 1 }]);
    }
  }

  function handleCategoryClick(e) {
    console.log(e.target.textContent);
    setSelectedCategory("/category/" + e.target.textContent.toLowerCase());
  }

  return (
    <div onClick={onProductClick} className="bg-base-300 rounded-lg relative h-[250px]  text-base-100 bg-base-content hover:cursor-pointer">
      <div className="bg-white rounded-t-lg w-[95%] m-auto rounded-lg">
        <img className="rounded-lg m-auto h-[202px] object-scale-down" src={product.image} alt="" />
      </div>

      {/* <p>{product.title}</p> */}
      <div className="flex justify-between items-center">
        <div>
          <p className="absolute top-0 text-sm rounded-t-lg font-bold bg-opacity-80 px-4 w-full text-center text-base-100 bg-base-content">{product.title}</p>
          <div className="absolute top-[170px] flex justify-between w-full">
            <p className=" rounded-lg px-2 bg-opacity-80 text-base-100 bg-base-content">${product.price}</p>
            <p className=" rounded-lg px-2 bg-opacity-80 text-base-100 bg-base-content">
              {product.rating.rate} ({product.rating.count})
            </p>
          </div>
          <p onClick={handleCategoryClick} className="hover:cursor-pointer hover:text-error pl-2">
            {capitalize(product.category)}
          </p>
        </div>
        {/* <p className="text-ellipsis overflow-hidden">{product.description}</p> */}
        <button onClick={onAddToCart} className="btn btn-neutral hover:btn-accent">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
