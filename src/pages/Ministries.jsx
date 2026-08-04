import {
  Users,
  Baby,
  BookOpen,
  Music,
  HeartHandshake,
  Globe2
} from "lucide-react";


const Ministries = () => {

  const ministries = [
    {
      icon: Users,
      title: "Youth Ministry",
      description:
        "Helping young people discover their identity in Christ, grow spiritually, and become leaders who impact their generation.",
    },

    {
      icon: Baby,
      title: "Children Ministry",
      description:
        "Creating a safe and joyful environment where children learn God's word and build a strong foundation of faith.",
    },

    {
      icon: BookOpen,
      title: "Bible Study Ministry",
      description:
        "Encouraging believers to study Scripture, understand God's truth, and apply His word daily.",
    },

    {
      icon: Music,
      title: "Choir & Worship Ministry",
      description:
        "Leading the church into God's presence through worship, praise, and spiritual songs.",
    },

    {
      icon: HeartHandshake,
      title: "Outreach Ministry",
      description:
        "Showing Christ's love through evangelism, community support, and reaching people in need.",
    },

    {
      icon: Globe2,
      title: "Mission Ministry",
      description:
        "Taking the gospel beyond our local community and sharing God's message around the world.",
    },
  ];


  return (
    <div>


      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold font-saira">
            Our Ministries
          </h1>


          <p className="mt-5 max-w-3xl mx-auto text-blue-100 font-poppins leading-relaxed">
            Discover opportunities to grow, serve, and connect through
            our different church ministries.
          </p>


        </div>

      </section>




      {/* Ministries Cards */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {ministries.map((ministry, index) => {

              const Icon = ministry.icon;


              return (

                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
                >


                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">

                    <Icon size={32}/>

                  </div>



                  <h2 className="mt-6 text-2xl font-bold text-blue-900 font-saira">
                    {ministry.title}
                  </h2>



                  <p className="mt-4 text-gray-600 leading-relaxed font-poppins">
                    {ministry.description}
                  </p>


                </div>

              );

            })}


          </div>


        </div>

      </section>



      {/* Call To Action */}
      <section className="py-20 bg-white">


        <div className="max-w-4xl mx-auto px-6 text-center">


          <h2 className="text-4xl font-bold text-blue-900 font-saira">
            Serve With Us
          </h2>


          <p className="mt-5 text-gray-600 font-poppins">
            Everyone has a place to serve. Join a ministry and become
            part of building God's kingdom.
          </p>


          <button
            className="mt-8 bg-gradient-to-r from-blue-900 to-green-600 text-white px-8 py-3 rounded-full hover:scale-105 transition font-poppins"
          >
            Join A Ministry
          </button>


        </div>


      </section>


    </div>
  );
};


export default Ministries;