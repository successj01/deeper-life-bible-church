// src/components/EventsSection.jsx

import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";

import events from "../data/events";


const EventsSection = () => {

  return (
    <section className="py-20 bg-gray-50">


      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center">


        <p className="text-blue-700 uppercase tracking-widest font-medium font-poppins">
          Upcoming Events
        </p>


        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-blue-900 font-saira">
          Join Our Church Programs
        </h2>


        <p className="mt-5 max-w-2xl mx-auto text-gray-600 font-poppins">
          Stay connected with our upcoming services, programs,
          conferences, and special church activities.
        </p>


      </div>





      {/* Events Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">


        {events.map((event) => (

          <div
            key={event.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >


            {/* Event Image */}
            <div className="relative">

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />


            </div>





            {/* Event Content */}
            <div className="p-6">


              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                <CalendarDays size={30}/>
              </div>




              <h3 className="mt-5 text-2xl font-bold text-blue-900 font-saira">
                {event.title}
              </h3>




              <p className="mt-3 text-gray-600 font-poppins leading-relaxed">
                {event.description}
              </p>





              <div className="mt-6 space-y-3 text-gray-700">


                <div className="flex items-center gap-3">

                  <CalendarDays 
                    size={18}
                    className="text-blue-900"
                  />

                  <span className="font-poppins">
                    {event.date}
                  </span>

                </div>





                <div className="flex items-center gap-3">

                  <Clock
                    size={18}
                    className="text-blue-900"
                  />

                  <span className="font-poppins">
                    {event.time}
                  </span>

                </div>





                <div className="flex items-center gap-3">

                  <MapPin
                    size={18}
                    className="text-blue-900"
                  />

                  <span className="font-poppins">
                    {event.location}
                  </span>

                </div>


              </div>


            </div>


          </div>


        ))}


      </div>





      {/* Button */}
      <div className="text-center mt-12">


        <Link
          to="/events"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-green-600 text-white px-7 py-3 rounded-full hover:scale-105 transition duration-300 font-poppins"
        >

          View All Events

          <ArrowRight size={20}/>

        </Link>


      </div>


    </section>
  );
};


export default EventsSection;