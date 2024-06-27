import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { ProductList } from "./ProductsList";
import { useOutletContext } from "react-router-dom";
const productsAPI = `https://fakestoreapi.com/products`;
const filterAPI = `https://fakestoreapi.com/products/category/`;

export default function Home({ categories, cart, setCart, selectedCategory, setSelectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // if (categories.length > 0) console.log(categories);
  }, [categories]);

  useEffect(() => {
    // console.log(`${productsAPI}/${selectedCategory}`);
    axios
      .get(selectedCategory ? `${productsAPI}/${selectedCategory}` : productsAPI)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.error(error.message));
  }, [selectedCategory]);

  return (
    <div className="min-h-[85vh]">
      <Categories categories={categories} setSelectedCategory={setSelectedCategory} />
      <ProductList cart={cart} setCart={setCart} products={products} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}
