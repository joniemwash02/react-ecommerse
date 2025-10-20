import React, { useState } from "react";

const ChangeAddress = ({ onCancel, onSave }) => {
  const [address, setAddress] = useState("");

  const handleSave = () => {
    if (!address.trim()) {
      alert("Please enter a valid address.");
      return;
    }
    onSave(address);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Change Delivery Address
      </h2>

      {/* Address Input */}
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter new delivery address..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="w-1/2 mr-2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="w-1/2 ml-2 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
