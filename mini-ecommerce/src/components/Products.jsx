import ProductCard from "../components/ProductCard";

export default function Products({ products, addToCart }) {
  return (
    <div>
      <h2 className=" text-yellow-300 text-3xl font-bold mb-6 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
