import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">

          <div className="flex justify-center">

            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">

              <Mail size={32} />

            </div>

          </div>


          <h2 className="mt-6 text-4xl font-bold text-blue-900 font-saira">
            Stay Connected With Us
          </h2>


          <p className="mt-4 text-gray-600 font-poppins max-w-2xl mx-auto">
            Subscribe to receive church updates, upcoming events,
            sermons, and important announcements.
          </p>


          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />


            <button
              type="submit"
              className="bg-blue-900 text-white px-7 py-3 rounded-full hover:bg-blue-700 transition font-poppins"
            >
              Subscribe
            </button>

          </form>


        </div>

      </div>

    </section>
  );
};

export default Newsletter;