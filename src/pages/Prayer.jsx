import React, { useState } from "react";

const Prayer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayerRequest: "",
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/prayers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const data = await response.json();


      if (data.success) {
        setMessage("Prayer request submitted successfully 🙏");

        setFormData({
          name: "",
          email: "",
          phone: "",
          prayerRequest: "",
        });

      } else {
        setMessage(data.message);
      }


    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
    }
  };


  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-blue-900 text-center mb-3">
          Prayer Request
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Share your prayer request with us. We will pray with you.
        </p>


        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-5">
            {message}
          </div>
        )}


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />


          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />


          <textarea
            name="prayerRequest"
            placeholder="Write your prayer request..."
            value={formData.prayerRequest}
            onChange={handleChange}
            rows="5"
            className="w-full border p-3 rounded-lg mb-4"
            required
          />


          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Prayer Request
          </button>


        </form>

      </div>

    </section>
  );
};


export default Prayer;