import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {

      const response = await axiosInstance.post(
        "/auth/forgot-password",
        {
          email,
        }
      );


      setMessage(response.data.message);


    } catch (error) {

      console.error(error);

      setMessage(
        error.response?.data?.message ||
        "Unable to connect to server"
      );


    } finally {

      setLoading(false);

    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">


        <h2 className="text-3xl font-bold text-center text-blue-900 font-saira">
          Forgot Password
        </h2>


        <p className="text-center text-gray-500 mt-2 font-poppins">
          Enter your email to reset your password
        </p>



        <form
          onSubmit={handleSubmit}
          className="mt-6"
        >


          <label className="block mb-2 text-gray-700 font-medium">
            Email
          </label>


          <div className="flex items-center border rounded-lg px-3">


            <Mail
              size={20}
              className="text-gray-400"
            />


            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 outline-none"
              required
            />


          </div>



          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >

            {
              loading
                ? "Sending..."
                : "Send Reset Link"
            }

          </button>


        </form>



        {message && (
          <p className="text-center mt-4 text-green-600">
            {message}
          </p>
        )}



        <Link
          to="/login"
          className="block text-center mt-5 text-blue-900"
        >
          Back to Login
        </Link>


      </div>


    </section>
  );
};


export default ForgotPassword;