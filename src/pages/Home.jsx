import React, { use, useEffect } from "react";
import { categories } from "../assets/MockData";
import bannerImage from "../assets/Images/home-banner.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { MockData } from "../assets/MockData";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(setProducts(MockData));
  }, [dispatch]);

  return (
    <div>
    <div className="bg-white mt-2  px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row">
        <div className="w-full md:w-3/12 mr-4">
          {/* Header */}
          <div className="bg-red-600 text-white text-sm md:text-base font-semibold px-4 py-3 rounded-t-md shadow-md">
            SHOP BY CATEGORY
          </div>

          {/* Category List */}
          <ul className="bg-white border border-gray-200 rounded-b-md shadow-md divide-y divide-gray-100">
            {categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-3 text-sm text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
              >
                <div className="w-2 h-2 border-2 border-red-500 rounded-full mr-3"></div>
                <span className="truncate">{category}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 relative rounded-md overflow-hidden shadow-lg">
          {/* Banner Image */}
          <img
            src={bannerImage}
            alt="Banner"
            className="h-64 md:h-[400px] w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

          {/* Text Content */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white max-w-md">
            <p className="text-sm md:text-base mb-2 opacity-90">John | ESHOP</p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-2">
              Welcome to John <span className="text-red-500">E-SHOP</span>
            </h1>
            <p className="text-base md:text-xl font-medium opacity-90 mb-4">
              Your one-stop shop for all your needs!
            </p>
            <button className="bg-red-600 px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-md">
              <Link to="/shop">SHOP NOW</Link>
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div>
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 cursor-pointer">
            {products.products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Shop />
  </div>
  );
};

export default Home;
