import { useState } from "react";
import { PlayCircle, Calendar, User, X } from "lucide-react";

const Sermons = () => {
  const sermons = [
    {
      title: "Faithfully Fighting the Battle of the Lord",
      speaker: "Pastor William Kumuyi",
      date: "July 19, 2026",
      image: "/images/sermon-1.jpg",
      videoId: "TZDGADe95B4",
      description:
        "A worship service message on standing firm and fighting the good fight of faith in every season of life.",
    },
    {
      title: "Believers' Great Victory through the Glorious Saviour",
      speaker: "Pastor William Kumuyi",
      date: "Global Crusade Message",
      image: "/images/sermon-2.jpg",
      videoId: "QHYVBA77_v0",
      description:
        "A message from the Glorious Transformation through Christ Global Crusade on the victory believers have through Christ.",
    },
    {
      title: "The Possibilities of Faith, Great Faith and Growing Faith",
      speaker: "Pastor William Kumuyi",
      date: "Global Crusade Message",
      image: "/images/sermon-3.jpg",
      videoId: "rQpItk6JJCE",
      description:
        "A teaching on the possibilities that open up through faith, and how believers can grow from small faith to great faith.",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

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
                <div
                  className="relative cursor-pointer group"
                  onClick={() => setActiveVideo(sermon.videoId)}
                >
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                  <button
                    aria-label={`Play ${sermon.title}`}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center group-hover:bg-blue-700 group-hover:scale-110 transition"
                  >
                    <PlayCircle size={32} />
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
                      <User size={18} />
                      {sermon.speaker}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      {sermon.date}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveVideo(sermon.videoId)}
                    className="mt-6 w-full bg-blue-900 text-white py-3 rounded-full hover:bg-blue-700 transition font-poppins"
                  >
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

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="sermon-video relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-blue-300 transition"
            >
              <X size={28} />
            </button>

            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${activeVideo}`}
                title="Pastor W.F. Kumuyi Sermon"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sermons;