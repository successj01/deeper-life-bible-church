import {
  Users,
  Heart,
  BookOpen,
  Music,
  Baby,
  Globe,
  ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";
import ministries from "../data/ministries";


const iconList = {
  "Youth Ministry": Users,
  "Children Ministry": Baby,
  "Bible Study": BookOpen,
  "Choir & Worship": Music,
  "Outreach Ministry": Heart,
  "Missions": Globe,
};


const MinistriesSection = () => {


  return (
    <section className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-widest text-blue-700 font-poppins">
            Our Ministries
          </p>


          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-blue-900 font-saira">
            Serving God Through Different Ministries
          </h2>


          <p className="mt-5 text-gray-600 font-poppins leading-relaxed">
            Our ministries provide opportunities for everyone to grow,
            serve, connect, and experience the love of Christ.
          </p>

        </div>





        {/* Ministry Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {ministries.map((ministry) => {


            const Icon = iconList[ministry.title];


            return (

              <div
                key={ministry.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
              >


                {/* Image */}
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-52 object-cover"
                />



                <div className="p-8">


                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition">

                    {Icon && <Icon size={30}/>}

                  </div>




                  <h3 className="mt-6 text-2xl font-bold text-blue-900 font-saira">
                    {ministry.title}
                  </h3>




                  <p className="mt-4 text-gray-600 leading-relaxed font-poppins">
                    {ministry.description}
                  </p>




                  <Link
                    to="/ministries"
                    className="inline-flex items-center gap-2 mt-6 text-blue-900 font-medium hover:text-green-600 transition font-poppins"
                  >

                    Learn More

                    <ArrowRight size={18}/>

                  </Link>


                </div>


              </div>

            );

          })}


        </div>


      </div>


    </section>
  );
};


export default MinistriesSection;