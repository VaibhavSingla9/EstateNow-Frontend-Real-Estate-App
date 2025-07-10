import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email) {
      toast.error("Email not registered!");
      return;
    }

    if (storedUser.password !== password) {
      toast.error("Incorrect password!");
      return;
    }

    // ✅ SET LOGIN STATUS & NOTIFY
  localStorage.setItem("isLoggedIn", "true");
  window.dispatchEvent(new Event("storage"));

    toast.success("Logged in successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" required placeholder="Email address" className="w-full px-4 py-2 mb-4 border rounded-md" />
          <input type="password" name="password" required placeholder="Password" className="w-full px-4 py-2 mb-6 border rounded-md" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Log In</button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <button onClick={() => navigate("/signup")} className="text-blue-600 underline">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
