import React from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Amount: ₹{total}</p>
      <button onClick={handleOrder} disabled={cart.length === 0}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
