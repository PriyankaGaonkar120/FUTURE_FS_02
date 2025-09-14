import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ cartCount }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Video background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/pets.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Navbar + Page content */}
      <div className="relative z-20">
        <Navbar cartCount={cartCount} />
        {/* Add padding so content is not hidden behind Navbar */}
        <div className="pt-20 px-4 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
