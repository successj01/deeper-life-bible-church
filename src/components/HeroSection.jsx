import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import churchAbout from "../assets/images/Deeper_Life-church.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${churchAbout})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <div className="max-w-3xl">

          <p className="uppercase tracking-widest text-blue-200 font-medium mb-4 font-poppins">
            Welcome To Deeper Life Bible Church
          </p>


          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-saira">
            Growing In Faith,
            <span className="block text-blue-300">
              Living For Christ
            </span>
          </h1>


          <TypeAnimation
           sequence={[
           "Join our community of believers as we worship God, study His word, and grow together in faith, love, and service.",
             2000,
              "",
              500,
           ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
           className="mt-6 text-lg text-gray-200 leading-relaxed font-poppins"
         />


          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-700 transition px-7 py-3 rounded-full font-medium"
            >
              Join Us
              <ArrowRight size={20} />
            </Link>


            <Link
              to="/sermons"
              className="flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-blue-900 transition px-7 py-3 rounded-full font-medium"
            >
              Watch Sermons
              <PlayCircle size={20} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;