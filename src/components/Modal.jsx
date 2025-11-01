import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-lg font-bold"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
