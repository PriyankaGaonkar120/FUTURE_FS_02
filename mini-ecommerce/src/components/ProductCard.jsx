import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
