import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from "lucide-react";


const Contact = () => {

  return (
    <div>


      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold font-saira">
            Contact Us
          </h1>


          <p className="mt-5 max-w-3xl mx-auto text-blue-100 font-poppins">
            We would love to hear from you. Reach out to us for prayers,
            questions, or more information about our church.
          </p>

        </div>

      </section>





      {/* Contact Information + Form */}
      <section className="py-20 bg-gray-50">


        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">



          {/* Contact Details */}
          <div>


            <p className="text-blue-700 uppercase tracking-widest font-poppins">
              Get In Touch
            </p>


            <h2 className="mt-3 text-4xl font-bold text-blue-900 font-saira">
              We Are Here To Serve You
            </h2>


            <p className="mt-5 text-gray-600 font-poppins leading-relaxed">
              Whether you need prayer, spiritual guidance, or information
              about our services and programs, our team is ready to assist you.
            </p>




            <div className="mt-8 space-y-6">


              <div className="flex items-start gap-4">

                <div className="bg-blue-100 text-blue-900 p-3 rounded-full">
                  <MapPin size={25}/>
                </div>


                <div>
                  <h3 className="font-bold text-gray-800 font-saira">
                    Church Address
                  </h3>

                  <a href="https://maps.google.com/?q=Deeper+Life+Bible+Church+International+Headquarters%2C+Gbagada+Lagos" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-poppins">
                    Deeper Life Bible Church International Headquarters,Gbagada Lagos
                  </a>
                </div>

              </div>





              <div className="flex items-start gap-4">

                <div className="bg-blue-100 text-blue-900 p-3 rounded-full">
                  <Phone size={25}/>
                </div>


                <div>
                  <h3 className="font-bold text-gray-800 font-saira">
                    Phone
                  </h3>

                  <p className="text-gray-600 font-poppins">
                    +234 8143952549
                  </p>
                </div>

              </div>





              <div className="flex items-start gap-4">

                <div className="bg-blue-100 text-blue-900 p-3 rounded-full">
                  <Mail size={25}/>
                </div>


                <div>
                  <h3 className="font-bold text-gray-800 font-saira">
                    Email
                  </h3>

                  <a href="mailto:info@dlcm.org" className="text-gray-600 font-poppins">
                    info@dlcm.org
                  </a>
                </div>

              </div>





              <div className="flex items-start gap-4">

                <div className="bg-blue-100 text-blue-900 p-3 rounded-full">
                  <Clock size={25}/>
                </div>


                <div>
                  <h3 className="font-bold text-gray-800 font-saira">
                    Service Hours
                  </h3>

                  <p className="text-gray-600 font-poppins">
                    Sunday: 8:00 AM - 12:00 PM
                  </p>

                  <p className="text-gray-600 font-poppins">
                    Wednesday Bible Study: 5:30 PM
                  </p>

                </div>

              </div>


            </div>


          </div>






          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">


            <h2 className="text-3xl font-bold text-blue-900 font-saira">
              Send Us A Message
            </h2>


            <form className="mt-6 space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />



              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />



              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              />



              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-900"
              ></textarea>




              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-900 to-green-600 text-white py-3 rounded-full hover:scale-105 transition font-poppins"
              >

                Send Message
                <Send size={20}/>

              </button>


            </form>


          </div>



        </div>


      </section>





      {/* Map Section */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <iframe
           title="church Location"
           src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_LINK"
           loading="lazy"
            allowFullScreen
          ></iframe>

          

        </div>

      </section>



    </div>
  );
};


export default Contact;