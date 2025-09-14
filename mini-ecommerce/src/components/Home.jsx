import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-[70vh]">
      <h1 className="text-5xl font-bold mb-4 animate-fadeIn text-white">
        Welcome to Pawfect Pets 🐾
      </h1>

      {/* Catchy phrases */}
      <div className="mb-6 animate-fadeIn delay-200 text-white space-y-2">
        <p className="text-lg md:text-2xl">Everything your pet needs, all in one place!</p>
        <p className="text-lg md:text-2xl">From tasty treats to cozy beds, we’ve got it all!</p>
        <p className="text-lg md:text-2xl">Happy pets, happy life 🐶🐱</p>
      </div>

      <button
        className="px-4 py-2 rounded-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-[#2BF3F7] hover:text-black transition"
        onClick={() => navigate("/products")}
      >
        Shop Now
      </button>
    </div>
  );
}
