import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">E-shop</Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        {/* Icons / Auth */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative inline-block">
            <FaShoppingCart className="text-2xl hover:text-red-600 transition" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {products.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block hover:text-red-600 transition">
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser className="text-xl hover:text-red-600 transition" />
          </button>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex space-x-6 justify-center py-3 text-sm font-semibold bg-gray-50 border-t">
        <Link className="hover:text-red-600 transition">Home</Link>
        <Link to="/shop" className="hover:text-red-600 transition">
          Shop
        </Link>
        <Link className="hover:text-red-600 transition">Contact</Link>
        <Link className="hover:text-red-600 transition">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
