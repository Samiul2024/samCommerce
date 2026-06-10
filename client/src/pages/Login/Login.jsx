import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const from =
    location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);

      navigate(from);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-black text-center mb-8">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

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
            Login
          </button>

        </form>

        <p className="text-center mt-5">
          New user?{" "}
          <Link
            className="text-orange-500 font-semibold"
            to="/register"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;