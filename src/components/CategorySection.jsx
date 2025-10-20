import React from "react";

import men from "../assets/Images/mens.jpg";
import women from "../assets/Images/women.jpg";
import kids from "../assets/Images/kids.jpg";

const CategorySection = () => {
  const categories = [
    { title: "Men's Fashion", imageUrl: men },
    { title: "Women's Fashion", imageUrl: women },
    { title: "Kids' Fashion", imageUrl: kids },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Shop by <span className="text-red-600">Category</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer transform transition duration-300 hover:scale-105"
          >
            {/* Category Image */}
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <p className="text-lg md:text-xl font-semibold mb-2">
                {category.title}
              </p>
              <button className="bg-red-600 text-sm px-4 py-1 rounded-full hover:bg-red-700 transition">
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
