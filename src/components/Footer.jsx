import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/images/deeper-life logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">


        {/* Church Info */}
        <div>

          <div className="flex items-center gap-3">

            <img
                 src={logo}
                alt="Deeper Life Bible Church Logo"
                className="w-14 h-14 object-contain"
            />

            <div>
              <h2 className="text-xl font-bold font-saira">
                Deeper Life
              </h2>

              <p className="text-sm text-blue-200 font-poppins">
                Bible Church
              </p>
            </div>

          </div>


          <p className="mt-5 text-blue-100 leading-relaxed font-poppins">
            A church committed to spreading God's word, building believers,
            and reaching communities with the love of Christ.
          </p>


          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook size={22} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaYoutube size={22} />
            </a>

          </div>

        </div>



        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-bold mb-5 font-saira">
            Quick Links
          </h3>


          <ul className="space-y-3 font-poppins">

            <li>
              <Link
                to="/"
                className="text-blue-100 hover:text-green-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-blue-100 hover:text-green-400 transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/sermons"
                className="text-blue-100 hover:text-green-400 transition"
              >
                Sermons
              </Link>
            </li>

            <li>
              <Link
                to="/events"
                className="text-blue-100 hover:text-green-400 transition"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                to="/give"
                className="text-blue-100 hover:text-green-400 transition"
              >
                Give
              </Link>
            </li>

          </ul>

        </div>



        {/* Ministries */}
        <div>

          <h3 className="text-xl font-bold mb-5 font-saira">
            Ministries
          </h3>


          <ul className="space-y-3 text-blue-100 font-poppins">

            <li>Youth Ministry</li>
            <li>Children Ministry</li>
            <li>Women Ministry</li>
            <li>Music Ministry</li>
            <li>Evangelism</li>

          </ul>

        </div>



        {/* Contact */}
        <div>

          <h3 className="text-xl font-bold mb-5 font-saira">
            Contact Us
          </h3>


          <div className="space-y-4 text-blue-100 font-poppins">


            <p className="flex gap-3">
              <MapPin size={20} className="text-green-400" />
              Lagos, Nigeria
            </p>


            <p className="flex gap-3">
              <Phone size={20} className="text-green-400" />
              +234 800 000 0000
            </p>


            <p className="flex gap-3">
              <Mail size={20} className="text-green-400" />
              info@deeperlifechurch.com
            </p>


          </div>

        </div>


      </div>



      {/* Bottom Footer */}
      <div className="border-t border-blue-800">

        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-blue-200 font-poppins">

          <p>
            © {new Date().getFullYear()} Deeper Life Bible Church.
            All Rights Reserved.
          </p>

        </div>

      </div>


    </footer>
  );
};


export default Footer;