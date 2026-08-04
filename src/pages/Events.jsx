import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const Events = () => {

  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "8:00 AM - 12:00 PM",
      location: "Main Church Auditorium",
      image: "/images/event-1.jpg",
      description:
        "Join us for a powerful worship experience, inspiring messages, and fellowship with believers.",
    },

    {
      id: 2,
      title: "Bible Study Meeting",
      date: "Every Wednesday",
      time: "5:30 PM - 7:30 PM",
      location: "Church Bible Study Hall",
      image: "/images/event-2.jpg",
      description:
        "A time to study God's word, grow spiritually, and strengthen our faith together.",
    },

    {
      id: 3,
      title: "Annual Church Convention",
      date: "August 15 - August 22, 2026",
      time: "9:00 AM Daily",
      location: "Church Headquarters",
      image: "/images/event-3.jpg",
      description:
        "A special gathering of believers for worship, prayer, teaching, and spiritual renewal.",
    },
  ];


  return (
    <div>


      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold font-saira">
            Church Events
          </h1>


          <p className="mt-5 max-w-3xl mx-auto text-blue-100 font-poppins">
            Discover upcoming programs, worship services, and activities
            happening in our church community.
          </p>


        </div>

      </section>




      {/* Events Cards */}
      <section className="py-20 bg-gray-50">


        <div className="max-w-7xl mx-auto px-6">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {events.map((event) => (

              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >


                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />



                {/* Content */}
                <div className="p-6">


                  <h2 className="text-2xl font-bold text-blue-900 font-saira">
                    {event.title}
                  </h2>



                  <p className="mt-3 text-gray-600 font-poppins">
                    {event.description}
                  </p>



                  <div className="mt-5 space-y-3 text-gray-500 text-sm font-poppins">


                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-blue-900"/>
                      {event.date}
                    </div>



                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-blue-900"/>
                      {event.time}
                    </div>



                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-blue-900"/>
                      {event.location}
                    </div>


                  </div>



                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-blue-900 font-medium hover:text-green-600 transition font-poppins"
                  >
                    Register Now
                    <ArrowRight size={18}/>
                  </Link>


                </div>


              </div>

            ))}


          </div>


        </div>


      </section>



      {/* CTA */}
      <section className="py-16 bg-white">


        <div className="max-w-4xl mx-auto px-6 text-center">


          <h2 className="text-4xl font-bold text-blue-900 font-saira">
            Be Part Of Our Next Event
          </h2>


          <p className="mt-4 text-gray-600 font-poppins">
            Join us as we worship, learn, and grow together as a church family.
          </p>


          <Link
            to="/contact"
            className="inline-block mt-8 bg-gradient-to-r from-blue-900 to-green-600 text-white px-8 py-3 rounded-full hover:scale-105 transition font-poppins"
          >
            Contact Us
          </Link>


        </div>


      </section>


    </div>
  );
};


export default Events;