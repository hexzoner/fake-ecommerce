import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import axios from "axios";
import MainLayout from "./MainLayout";
import Cart from "./Cart";
import ProductDetails from "./ProductCard";
import PageNotFound from "./NotFound";
const categoriesAPI = `https://fakestoreapi.com/products/categories`;

export function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

function App() {
  // const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get(categoriesAPI)
      .then((res) => {
        // console.log(res.data);
        setCategories(res.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
        <Route path="cart" element={<Cart categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
        <Route path="product/:id" element={<ProductDetails categories={categories} />} />
        <Route path="*" element={<PageNotFound categories={categories} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
