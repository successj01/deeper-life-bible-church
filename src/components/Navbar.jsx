import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/deeper-life logo.jpg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Sermons", path: "/sermons" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Prayer", path: "/prayer" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Deeper Life Logo"
            className="w-14 h-14 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-900 font-saira">
              Deeper Life
            </h1>

            <p className="text-sm text-gray-500 font-poppins">
              Bible Church
            </p>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-900 font-medium transition font-poppins"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/give"
            className="bg-gradient-to-r from-blue-900 to-green-700 text-white px-7 py-3 rounded-full font-medium hover:scale-105 transition duration-300 shadow-lg "
          >
            Give
          </Link>

        </div>
        


        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>


      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6">

          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-900 font-poppins"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/give"
              onClick={() => setIsOpen(false)}
              className="bg-blue-900 text-white text-center py-2 rounded-full"
            >
              Give
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;