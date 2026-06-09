import { useState } from "react";
import { useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();

  const {
    registerUser,
    updateUserProfile,
  } = useAuth();

  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError(
        "Password must be at least 6 characters"
      );
    }

    try {
      await registerUser(email, password);

      await updateUserProfile(name, "");

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-black text-center mb-8">
          Create Account
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border p-4 rounded-xl"
          />

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

          <button
            className="w-full bg-orange-500 text-white py-4 rounded-xl"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;