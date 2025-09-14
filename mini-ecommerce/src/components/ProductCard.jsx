export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg hover:shadow-xl transition text-center text-white">
      <img src={product.img} alt={product.name} className="w-32 h-32 mx-auto rounded-lg object-cover" />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-green-400 font-bold">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
