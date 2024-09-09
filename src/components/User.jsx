import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [navigate, userData]);

  if (!userData) {
    return null;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Perfil de Usuario
        </h1>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Nombre:</h2>
          <p className="text-gray-600">{userData?.name}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Apellido:</h2>
          <p className="text-gray-600">{userData?.lastName}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Correo:</h2>
          <p className="text-gray-600">{userData?.email}</p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("userData");
            navigate("/");
          }}
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
