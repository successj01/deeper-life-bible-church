import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Lock, Eye, EyeOff, Mail } from "lucide-react";
import churchLogo from "../assets/images/church-logo.png";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  // Step 1 state (request link)
  const [email, setEmail] = useState("");

  // Step 2 state (set new password)
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  // ---- STEP 1: request the reset link ----
  const handleRequestLink = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Reset link sent. Please check your email.");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  // ---- STEP 2: set the new password (token present) ----
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Password reset successfully");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${churchLogo})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          {token ? (
            <>
              {/* ---- STEP 2 UI: new password ---- */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-blue-900 font-saira">
                  Reset Password
                </h2>

                <p className="text-gray-500 mt-2 font-poppins">
                  Enter your new password below
                </p>
              </div>

              <form onSubmit={handleResetPassword}>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">
                    New Password
                  </label>

                  <div className="flex items-center border rounded-lg px-3">
                    <Lock size={20} className="text-gray-400" />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3 outline-none"
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                  {loading ? "Updating..." : "Reset Password"}
                </button>
              </form>
            </>
          ) : (
            <>
              {/* ---- STEP 1 UI: request link ---- */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-blue-900 font-saira">
                  Forgot Password
                </h2>

                <p className="text-gray-500 mt-2 font-poppins">
                  Enter your email to reset your password
                </p>
              </div>

              <form onSubmit={handleRequestLink}>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email
                  </label>

                  <div className="flex items-center border rounded-lg px-3">
                    <Mail size={20} className="text-gray-400" />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 outline-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </>
          )}

          {/* Back to Login */}
          <div className="text-center mt-5">
            <Link
              to="/login"
              className="text-blue-900 hover:text-blue-700 font-medium"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;