import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user values from the form
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Save user info in localStorage
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    localStorage.setItem("isLoggedIn", "true");


    
  // ✅ Notify other components like Navbar
  window.dispatchEvent(new Event("storage"));



    alert("Signed up successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input type="email" name="email" required placeholder="Email address" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input type="password" name="password" required placeholder="Password" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Sign Up</button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 ml-1 underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
