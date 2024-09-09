import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.email || !value.password) {
      toast.error("Todos los campos deben ser llenados");
    } else {
      try {
        const response = await axios.post("/martinez/login", value);
        const userData = response.data.data;
        localStorage.setItem("userData", JSON.stringify(userData));
        const name = userData.name.toUpperCase();
        toast.success(`Bienvenido ${name}`);
        navigate("/user");
      } catch (error) {
        console.error("Error al logearse: ", error);
        toast.error("Credenciales inválidas");
      }
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="relative w-full max-w-md">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
        <div
          id="form-container"
          className="bg-white p-16 rounded-lg shadow-2xl w-full relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Login
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              name=""
              type="text"
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              name=""
              type="password"
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
            <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <Link
              to={`/signup`}
              className="text-blue-500 hover:text-blue-800 text-sm"
              href="#"
            >
              Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
