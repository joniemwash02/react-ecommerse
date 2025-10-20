import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ESHOP</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop online shop for the latest trends in fashion. Shop confidently with us today!
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-red-500 transition-colors">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@eshop.com" className="hover:text-red-500">joniemwash@gmail.com</a></p>
          <p>Phone: <a href="tel:+254700000000" className="hover:text-red-500">+254 711381285</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-500 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-red-500 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-red-500 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} ESHOP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
