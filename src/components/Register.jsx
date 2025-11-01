import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Create Account ✨
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please sign up to continue
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-5 text-gray-600 text-sm">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="text-red-600 font-medium hover:text-red-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
