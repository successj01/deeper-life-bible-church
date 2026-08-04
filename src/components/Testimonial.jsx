import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John David",
    role: "Church Member",
    message:
      "Deeper Life Bible Church has helped me grow spiritually through God's word, prayer, and fellowship.",
  },
  {
    name: "Grace Emmanuel",
    role: "Youth Member",
    message:
      "The teachings and programs have strengthened my faith and helped me discover my purpose in Christ.",
  },
  {
    name: "Michael James",
    role: "Member",
    message:
      "A welcoming church where believers can grow, serve, and experience God's love.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-blue-900">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <p className="uppercase tracking-widest text-blue-200 font-poppins">
          Testimonies
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold font-saira">
          What Our Members Say
        </h2>

      </div>


      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid gap-8 md:grid-cols-3">

        {testimonials.map((testimonial, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >

            <Quote
              size={40}
              className="text-blue-900"
            />


            <p className="mt-5 text-gray-600 leading-relaxed font-poppins">
              {testimonial.message}
            </p>


            <h3 className="mt-6 text-xl font-bold text-blue-900 font-saira">
              {testimonial.name}
            </h3>


            <p className="text-gray-500 font-poppins">
              {testimonial.role}
            </p>


          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonial;