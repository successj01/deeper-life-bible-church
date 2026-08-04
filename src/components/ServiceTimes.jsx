import { Clock, MapPin, CalendarDays } from "lucide-react";

const services = [
  {
    title: "Sunday Worship Service",
    day: "Every Sunday",
    time: "8:00 AM - 11:00 AM",
    location: "Main Church Auditorium",
  },
  {
    title: "Bible Study",
    day: "Every Wednesday",
    time: "5:30 PM - 7:00 PM",
    location: "Church Hall",
  },
  {
    title: "Prayer Meeting",
    day: "Every Friday",
    time: "5:00 PM - 6:30 PM",
    location: "Church Prayer Room",
  },
];

const ServiceTimes = () => {
  return (
    <section className="py-20 bg-white">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-blue-700 uppercase tracking-widest font-medium font-poppins">
          Service Times
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-blue-900 font-saira">
          Join Us For Worship
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600 font-poppins">
          Come together with us for worship, prayer, Bible teaching,
          and fellowship as we grow in faith.
        </p>

      </div>


      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid gap-8 md:grid-cols-3">

        {services.map((service, index) => (

          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
          >

            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
              <CalendarDays size={30} />
            </div>


            <h3 className="mt-6 text-2xl font-bold text-gray-800 font-saira">
              {service.title}
            </h3>


            <div className="mt-5 space-y-3 text-gray-600 font-poppins">

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={20}
                  className="text-blue-900"
                />
                <span>
                  {service.day}
                </span>
              </div>


              <div className="flex items-center gap-3">
                <Clock
                  size={20}
                  className="text-blue-900"
                />
                <span>
                  {service.time}
                </span>
              </div>


              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  className="text-blue-900"
                />
                <span>
                  {service.location}
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ServiceTimes;