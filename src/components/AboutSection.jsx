import { Link } from "react-router-dom";
import { ArrowRight, Church, Heart, BookOpen } from "lucide-react";
import aboutsection from "../assets/images/about-section.jpg"
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative">

          <img
            src={aboutsection}
            alt="Deeper Life Bible Church"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />

          <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white rounded-xl p-6 shadow-lg">
            <p className="text-3xl font-bold font-saira">
              50+
            </p>
            <p className="font-poppins text-sm">
              Years of Ministry
            </p>
          </div>

        </div>


        {/* Content */}
        <div>

          <p className="text-blue-700 uppercase tracking-widest font-medium font-poppins">
            About Our Church
          </p>


          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-blue-900 font-saira">
            A Church Built On Faith And The Word Of God
          </h2>


          <p className="mt-6 text-gray-600 leading-relaxed font-poppins">
            Deeper Life Bible Church is committed to spreading the gospel,
            building strong believers, and raising people who live according
            to God's word. We believe in spiritual growth, prayer, and
            serving humanity through Christ's love.
          </p>


          {/* Values */}
          <div className="mt-8 space-y-5">


            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                <Church size={24} />
              </div>

              <div>
                <h3 className="font-bold text-gray-800 font-saira">
                  Our Mission
                </h3>

                <p className="text-gray-600 font-poppins">
                  Taking God's message to the world and making disciples.
                </p>
              </div>

            </div>



            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                <BookOpen size={24} />
              </div>

              <div>
                <h3 className="font-bold text-gray-800 font-saira">
                  Biblical Teaching
                </h3>

                <p className="text-gray-600 font-poppins">
                  Growing believers through the study and application of God's word.
                </p>
              </div>

            </div>



            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                <Heart size={24} />
              </div>

              <div>
                <h3 className="font-bold text-gray-800 font-saira">
                  Serving Others
                </h3>

                <p className="text-gray-600 font-poppins">
                  Showing Christ's love through service and compassion.
                </p>
              </div>

            </div>


          </div>


          {/* Button */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-8 bg-blue-900 text-white px-7 py-3 rounded-full hover:bg-blue-700 transition font-poppins"
          >
            Learn More
            <ArrowRight size={20} />
          </Link>


        </div>

      </div>

    </section>
  );
};

export default AboutSection;