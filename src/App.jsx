import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import User from "./components/User";
import NotFound from "./components/NotFound";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      navigate("/user");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
