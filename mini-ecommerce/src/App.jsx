import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import CartPage from "./components/CartPage";
import Orders from "./components/Orders";

const allProducts = [
  { id: 1, name: "Dog Food", price: 499, img: "/1.png" },
  { id: 2, name: "Cat Bed", price: 799, img: "/2.png" },
  { id: 3, name: "Bird Cage", price: 1199, img: "/3.png" },
  { id: 4, name: "Pet Toy", price: 299, img: "/4.png" },
  { id: 5, name: "Fish Tank", price: 2499, img: "/5.png" },
  { id: 6, name: "Cat Scratcher", price: 599, img: "/6.png" },
  { id: 7, name: "Dog Collar", price: 199, img: "/7.png" },
  { id: 8, name: "Pet Shampoo", price: 349, img: "/8.png" },
  { id: 9, name: "Bird Feeder", price: 449, img: "/9.png" },
  { id: 10, name: "Rabbit Hutch", price: 2999, img: "/10.png" },
  { id: 11, name: "Cat Litter Box", price: 699, img: "/11.png" },
  { id: 12, name: "Dog Harness", price: 899, img: "/12.png" },
  { id: 13, name: "Pet Blanket", price: 499, img: "/13.png" },
  { id: 14, name: "Cat Tower", price: 2599, img: "/14.png" },
  { id: 15, name: "Bird Swing", price: 299, img: "/15.png" },
  { id: 16, name: "Goldfish Food", price: 199, img: "/16.png" },
  { id: 17, name: "Dog Bed", price: 1499, img: "/17.png" },
  { id: 18, name: "Pet Carrier", price: 1999, img: "/18.png" },
  { id: 19, name: "Hamster Wheel", price: 799, img: "/19.png" },
  { id: 20, name: "Cat Toy Mouse", price: 149, img: "/20.png" },
];



export default function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrders([...orders, cart]);
    setCart([]);
    alert("Order placed successfully!");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout cartCount={cart.length} />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<Products products={allProducts} addToCart={addToCart} />}
          />
          <Route
            path="cart"
            element={<CartPage cart={cart} placeOrder={placeOrder} />}
          />
          <Route path="orders" element={<Orders orders={orders} />} />
        </Route>
      </Routes>
    </Router>
  );
}
