export default function Orders({ orders }) {
  return (
    <div>
      <h2 className="text-yellow-300  text-3xl font-bold mb-4 text-center ">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-300 text-center">No orders placed yet.</p>
      ) : (
        orders.map((order, idx) => (
          <div key={idx} className="mb-4 p-4 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg shadow-md max-w-xl mx-auto">
            <h3 className="font-semibold mb-2">Order #{idx + 1}</h3>
            {order.map((item, i) => (
              <div key={i} className="flex justify-between py-1 border-b border-white/20">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
            <div className="mt-2 font-bold text-green-400 flex justify-between">
              <span>Total:</span>
              <span>₹{order.reduce((sum, item) => sum + item.price, 0)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
