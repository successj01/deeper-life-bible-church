import { Camera } from "lucide-react";


const Gallery = () => {

  const images = [
    {
      image: "/images/gallery-1.jpg",
      title: "Sunday Worship Service",
    },

    {
      image: "/images/gallery-2.jpg",
      title: "Church Praise And Worship",
    },

    {
      image: "/images/gallery-3.jpg",
      title: "Bible Study Meeting",
    },

    {
      image: "/images/gallery-4.jpg",
      title: "Church Convention",
    },

    {
      image: "/images/gallery-5.jpg",
      title: "Prayer Session",
    },

    {
      image: "/images/gallery-6.jpg",
      title: "Community Outreach",
    },
  ];


  return (
    <div>


      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold font-saira">
            Church Gallery
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-blue-100 font-poppins">
            Explore moments of worship, fellowship, events, and activities
            from our church community.
          </p>

        </div>

      </section>




      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


            {images.map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >


                <div className="relative overflow-hidden">


                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />



                  {/* Overlay */}
                  <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                    <Camera
                      size={45}
                      className="text-white"
                    />

                  </div>


                </div>




                <div className="p-5">

                  <h2 className="text-xl font-bold text-blue-900 font-saira">
                    {item.title}
                  </h2>

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
            Be Part Of Our Community
          </h2>

          <p className="mt-4 text-gray-600 font-poppins">
            Join us for worship, fellowship, and life-changing experiences.
          </p>


        </div>

      </section>


    </div>
  );
};


export default Gallery;