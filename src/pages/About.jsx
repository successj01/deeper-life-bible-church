import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, ArrowRight } from "lucide-react";
import deeperlifeChurch from "../assets/images/deeper life church logo.jpg";
const About = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold font-saira">
            About Deeper Life Bible Church
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-blue-100 font-poppins leading-relaxed">
            A church dedicated to spreading the gospel of Jesus Christ,
            building believers, and transforming lives through God's word.
          </p>

        </div>

      </section>



      {/* About Content */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


          {/* Image */}
          <div>

            <img
              src={deeperlifeChurch}
              alt="Deeper Life Bible Church"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />

          </div>



          {/* Text */}
          <div>

            <p className="text-blue-700 uppercase tracking-widest font-poppins">
              Who We Are
            </p>


            <h2 className="mt-3 text-4xl font-bold text-blue-900 font-saira">
              Growing In Faith, Serving God, Impacting Lives
            </h2>


            <p className="mt-6 text-gray-600 leading-relaxed font-poppins">
              Deeper Life Bible Church is a Christian ministry committed
              to preaching the undiluted word of God, encouraging spiritual
              growth, and preparing believers for a life of holiness and
              service.
            </p>


            <p className="mt-4 text-gray-600 leading-relaxed font-poppins">
              Through worship, Bible teaching, prayer meetings, and community
              outreach, we help individuals discover God's purpose and develop
              a deeper relationship with Christ.
            </p>


            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-blue-900 to-green-600 text-white px-7 py-3 rounded-full hover:scale-105 transition duration-300 font-poppins"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>


          </div>


        </div>

      </section>




      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">


          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
              <Heart size={30} />
            </div>


            <h3 className="mt-6 text-2xl font-bold text-blue-900 font-saira">
              Our Mission
            </h3>


            <p className="mt-4 text-gray-600 font-poppins">
              To spread the gospel of Jesus Christ and raise believers
              who live according to God's word.
            </p>

          </div>



          {/* Teaching */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
              <BookOpen size={30} />
            </div>


            <h3 className="mt-6 text-2xl font-bold text-blue-900 font-saira">
              Biblical Teaching
            </h3>


            <p className="mt-4 text-gray-600 font-poppins">
              Teaching God's word clearly and helping believers grow
              spiritually through Scripture.
            </p>

          </div>




          {/* Community */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
              <Users size={30} />
            </div>


            <h3 className="mt-6 text-2xl font-bold text-blue-900 font-saira">
              Community
            </h3>


            <p className="mt-4 text-gray-600 font-poppins">
              Creating a loving church family where people can worship,
              connect, and serve together.
            </p>

          </div>


        </div>

      </section>


    </div>
  );
};


export default About;