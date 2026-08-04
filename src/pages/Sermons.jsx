import { PlayCircle, Calendar, User } from "lucide-react";


const Sermons = () => {

  const sermons = [
    {
      title: "Walking By Faith",
      speaker: "Pastor William Kumuyi",
      date: "August 2, 2026",
      image: "/images/sermon-1.jpg",
      description:
        "Learn how to trust God completely and live a life guided by faith in His promises.",
    },

    {
      title: "The Power Of Prayer",
      speaker: "Pastor William Kumuyi",
      date: "July 26, 2026",
      image: "/images/sermon-2.jpg",
      description:
        "Discover the importance of prayer and how it strengthens our relationship with God.",
    },

    {
      title: "Living A Holy Life",
      speaker: "Pastor William Kumuyi",
      date: "July 19, 2026",
      image: "/images/sermon-3.jpg",
      description:
        "A message about spiritual growth, holiness, and living according to God's word.",
    },
  ];


  return (
    <div>


      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold font-saira">
            Our Sermons
          </h1>


          <p className="mt-5 max-w-3xl mx-auto text-blue-100 font-poppins leading-relaxed">
            Watch and listen to inspiring messages that help you grow
            spiritually and deepen your relationship with Christ.
          </p>


        </div>

      </section>




      {/* Sermons */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {sermons.map((sermon, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >


                {/* Image */}
                <div className="relative">

                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-56 object-cover"
                  />


                  <button className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-700 transition">

                    <PlayCircle size={32}/>

                  </button>


                </div>



                {/* Content */}
                <div className="p-6">


                  <h2 className="text-2xl font-bold text-blue-900 font-saira">
                    {sermon.title}
                  </h2>



                  <p className="mt-3 text-gray-600 font-poppins">
                    {sermon.description}
                  </p>



                  <div className="mt-5 space-y-3 text-gray-500 font-poppins text-sm">


                    <div className="flex items-center gap-2">
                      <User size={18}/>
                      {sermon.speaker}
                    </div>



                    <div className="flex items-center gap-2">
                      <Calendar size={18}/>
                      {sermon.date}
                    </div>


                  </div>


                  <button className="mt-6 w-full bg-blue-900 text-white py-3 rounded-full hover:bg-blue-700 transition font-poppins">
                    Watch Sermon
                  </button>


                </div>


              </div>

            ))}


          </div>


        </div>

      </section>




      {/* Newsletter CTA */}
      <section className="py-16 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">


          <h2 className="text-4xl font-bold text-blue-900 font-saira">
            Never Miss A Message
          </h2>


          <p className="mt-4 text-gray-600 font-poppins">
            Subscribe to receive updates about new sermons and church events.
          </p>


        </div>

      </section>


    </div>
  );
};


export default Sermons;