import {
  HeartHandshake,
  CreditCard,
  Gift,
  ShieldCheck
} from "lucide-react";


const Give = () => {

  const givingMethods = [
    {
      icon: HeartHandshake,
      title: "Support The Ministry",
      description:
        "Your giving helps us spread the gospel, support church programs, and reach more lives.",
    },

    {
      icon: Gift,
      title: "Church Projects",
      description:
        "Partner with us in building projects, community support, and ministry activities.",
    },

    {
      icon: CreditCard,
      title: "Easy Giving",
      description:
        "Give conveniently through our secure payment channels and banking options.",
    },
  ];


  return (
    <div>


      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold font-saira">
            Give & Support God's Work
          </h1>


          <p className="mt-5 max-w-3xl mx-auto text-blue-100 font-poppins leading-relaxed">
            Your generosity helps us preach the gospel, support ministries,
            and make a difference in people's lives.
          </p>


        </div>

      </section>




      {/* Giving Options */}
      <section className="py-20 bg-gray-50">


        <div className="max-w-7xl mx-auto px-6">


          <div className="grid md:grid-cols-3 gap-8">


            {givingMethods.map((method, index) => {

              const Icon = method.icon;


              return (

                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
                >


                  <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">

                    <Icon size={32}/>

                  </div>



                  <h2 className="mt-6 text-2xl font-bold text-blue-900 font-saira">
                    {method.title}
                  </h2>



                  <p className="mt-4 text-gray-600 font-poppins leading-relaxed">
                    {method.description}
                  </p>


                </div>

              );

            })}


          </div>


        </div>


      </section>





      {/* Bank Details */}
      <section className="py-20 bg-white">


        <div className="max-w-4xl mx-auto px-6">


          <div className="bg-blue-900 text-white rounded-3xl p-10 text-center">


            <ShieldCheck 
              size={50}
              className="mx-auto mb-5"
            />


            <h2 className="text-4xl font-bold font-saira">
              Make Your Donation
            </h2>


            <p className="mt-4 text-blue-100 font-poppins">
              You can support the ministry through the following account details.
            </p>



            <div className="mt-8 bg-white text-gray-800 rounded-xl p-6 text-left font-poppins">


              <p>
                <strong>Bank Name:</strong> Your Church Bank
              </p>


              <p className="mt-3">
                <strong>Account Name:</strong> Deeper Life Bible Church
              </p>


              <p className="mt-3">
                <strong>Account Number:</strong> 0000000000
              </p>


            </div>


          </div>


        </div>


      </section>





      {/* Call To Action */}
      <section className="py-16 bg-gray-50">


        <div className="max-w-4xl mx-auto px-6 text-center">


          <h2 className="text-4xl font-bold text-blue-900 font-saira">
            Thank You For Your Support
          </h2>


          <p className="mt-5 text-gray-600 font-poppins">
            Every gift helps us continue spreading God's word and serving people.
          </p>


        </div>


      </section>


    </div>
  );
};


export default Give;