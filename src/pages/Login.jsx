import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import churchLogo from "../assets/images/church-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const data = await response.json();


      if (data.success) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        localStorage.setItem(
          "login",
          "true"
        );


        if (data.user.role === "admin") {
          navigate("/admin");
        } else {
          alert("Access denied. Admins only.");
        }


      } else {

        alert(data.message);

      }


    } catch (error) {

      console.error(error);

      alert(
        "Unable to connect to the server."
      );


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


      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-6">

        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">


          <div className="text-center mb-6">

            <h2 className="text-3xl font-bold text-blue-900 font-saira">
              Welcome Back
            </h2>


            <p className="text-gray-500 mt-2 font-poppins">
              Login to access the Admin Dashboard
            </p>

          </div>



          <form onSubmit={handleSubmit}>


            {/* Email */}

            <div className="mb-5">

              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>


              <div className="flex items-center border rounded-lg px-3">

                <Mail
                  size={20}
                  className="text-gray-400"
                />


                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />

              </div>

            </div>




            {/* Password */}

            <div className="mb-6">


              <label className="block text-gray-700 mb-2 font-medium">
                Password
              </label>



              <div className="flex items-center border rounded-lg px-3">


                <Lock
                  size={20}
                  className="text-gray-400"
                />


                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />



                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}

                </button>


              </div>


            </div>





            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
            >

              {
                loading
                  ? "Logging in..."
                  : "Login"
              }

            </button>




            {/* Forgot Password */}

            <div className="text-center mt-5">

              <Link
                to="/forgot-password"
                className="text-blue-900 hover:text-blue-700 font-medium"
              >
                Forgot Password?
              </Link>

            </div>



          </form>


        </div>

      </div>


    </section>
  );
};


export default Login;