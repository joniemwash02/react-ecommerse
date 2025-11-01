import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back 👋</h2>
      <p className="text-gray-500 mb-6 text-sm">Please log in to continue</p>

      <form className="space-y-4 text-left">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-red-600 w-4 h-4" />
            Remember me
          </label>
          <a href="#" className="text-red-600 hover:text-red-700 font-medium">
            Forgot Password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Sign up link */}
      <div className="mt-4 text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-red-600 font-medium hover:text-red-700"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
