import { PlayCircle, Calendar, User } from "lucide-react";


const SermonCard = ({ sermon }) => {

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">


      {/* Sermon Image */}
      <div className="relative">


        <img
          src={sermon.image}
          alt={sermon.title}
          className="w-full h-56 object-cover"
        />


        {/* Play Button */}
        <button
          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-700 transition"
        >

          <PlayCircle size={32} />

        </button>


      </div>



      {/* Content */}
      <div className="p-6">


        <h3 className="text-2xl font-bold text-blue-900 font-saira">
          {sermon.title}
        </h3>



        <p className="mt-3 text-gray-600 leading-relaxed font-poppins">
          {sermon.description}
        </p>



        {/* Sermon Info */}
        <div className="mt-5 space-y-3 text-gray-500 text-sm font-poppins">


          <div className="flex items-center gap-2">

            <User size={18} className="text-blue-900" />

            <span>
              {sermon.speaker}
            </span>

          </div>



          <div className="flex items-center gap-2">

            <Calendar size={18} className="text-blue-900" />

            <span>
              {sermon.date}
            </span>

          </div>


        </div>



        {/* Button */}
        <button
          className="mt-6 w-full bg-blue-900 text-white py-3 rounded-full hover:bg-blue-700 transition font-poppins"
        >
          Watch Sermon
        </button>


      </div>


    </div>
  );
};


export default SermonCard;