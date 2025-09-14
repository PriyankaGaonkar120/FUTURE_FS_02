import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black/30 text-white z-20 shadow-md">
      {/* Logo + Shop Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="petnest logo" className="w-20 h-20" />
        <span className="text-xl font-bold">PETNEST</span>
      </Link>

      {/* Navigation buttons */}
      <div className="flex gap-3">
        <Link
          to="/"
          className="px-4 py-2 rounded-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-[#2BF3F7] hover:text-black transition"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="px-4 py-2 rounded-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-[#2BF3F7] hover:text-black transition"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="px-4 py-2 rounded-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-[#2BF3F7] hover:text-black transition"
        >
          Cart ({cartCount})
        </Link>
        <Link
          to="/orders"
          className="px-4 py-2 rounded-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-[#2BF3F7] hover:text-black transition"
        >
          Orders
        </Link>
      </div>
    </nav>
  );
}
