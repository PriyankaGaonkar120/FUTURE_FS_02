export default function CartPage({ cart, placeOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center text-yellow-300">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-300 text-center">Cart is empty 🛒</p>
      ) : (
        <div className="space-y-2 max-w-xl mx-auto">
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between p-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className="mt-4 flex justify-between font-bold text-green-400">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button
            onClick={placeOrder}
            className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition w-full"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
