import ProductCard from "./ProductCard";

export function ProductList({ products, cart, setCart, setSelectedCategory }) {
  return (
    <div className="max-w-[1000px] m-auto">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} setSelectedCategory={setSelectedCategory} />;
          })}
        </div>
      ) : (
        <div>Loading products...</div>
      )}
    </div>
  );
}
