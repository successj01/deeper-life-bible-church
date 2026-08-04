import React from "react";
import {
  Users,
  BookOpen,
  CalendarDays,
  Image as ImageIcon,
  MessageSquare,
  Video,
  Plus,
  Bell
} from "lucide-react";


const adminDashboard = () => {


  const stats = [
    {
      title: "Members",
      number: "2,450",
      icon: <Users size={30} />,
    },
    {
      title: "Sermons",
      number: "120",
      icon: <BookOpen size={30} />,
    },
    {
      title: "Events",
      number: "15",
      icon: <CalendarDays size={30} />,
    },
    {
      title: "Gallery Photos",
      number: "350",
      icon: <ImageIcon size={30} />,
    },
  ];



  const sermons = [
    {
      title: "Walking By Faith",
      speaker: "Pastor John",
      date: "August 2, 2026",
    },
    {
      title: "The Power Of Prayer",
      speaker: "Pastor James",
      date: "July 28, 2026",
    },
    {
      title: "Growing In Christ",
      speaker: "Pastor Dr. W.F. Kumuyi",
      date: "July 20, 2026",
    },
  ];



  const events = [
    {
      name: "Annual Church Convention",
      date: "August 20, 2026",
    },
    {
      name: "Bible Study Meeting",
      date: "August 10, 2026",
    },
    {
      name: "Prayer Meeting",
      date: "August 5, 2026",
    },
  ];



  return (

    <div className="min-h-screen bg-gray-100 p-6">


      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-500">
            Manage Deeper Life Church website
          </p>

        </div>


        <button className="bg-white p-3 rounded-full shadow">

          <Bell className="text-green-700"/>

        </button>


      </div>





      {/* Statistics Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">


        {stats.map((item,index)=>(

          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
          >

            <div className="bg-green-100 text-green-700 p-3 rounded-lg">

              {item.icon}

            </div>


            <div>

              <h2 className="text-2xl font-bold text-gray-800">
                {item.number}
              </h2>

              <p className="text-gray-500">
                {item.title}
              </p>

            </div>


          </div>

        ))}


      </div>






      {/* Sermons and Events */}

      <div className="grid lg:grid-cols-2 gap-6">



        {/* Latest Sermons */}

        <div className="bg-white rounded-xl shadow p-6">


          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-bold">
              Latest Sermons
            </h2>


            <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg">

              <Plus size={18}/>

              Add

            </button>


          </div>



          {
            sermons.map((sermon,index)=>(

              <div
                key={index}
                className="border-b py-4"
              >

                <h3 className="font-semibold text-gray-800">
                  {sermon.title}
                </h3>


                <p className="text-gray-500 text-sm">
                  {sermon.speaker}
                </p>


                <p className="text-gray-400 text-sm">
                  {sermon.date}
                </p>


              </div>

            ))
          }


        </div>






        {/* Upcoming Events */}

        <div className="bg-white rounded-xl shadow p-6">


          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-bold">
              Upcoming Events
            </h2>


            <CalendarDays className="text-green-700"/>

          </div>



          {
            events.map((event,index)=>(

              <div
                key={index}
                className="border-b py-4"
              >

                <h3 className="font-semibold text-gray-800">
                  {event.name}
                </h3>


                <p className="text-gray-500 text-sm">
                  {event.date}
                </p>


              </div>

            ))
          }


        </div>



      </div>







      {/* Website Management */}

      <div className="mt-8 bg-white rounded-xl shadow p-6">


        <h2 className="text-xl font-bold mb-5">
          Website Management
        </h2>



        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">


          <button className="bg-green-50 text-green-700 p-4 rounded-lg">

            <BookOpen className="mx-auto mb-2"/>

            Sermons

          </button>



          <button className="bg-green-50 text-green-700 p-4 rounded-lg">

            <CalendarDays className="mx-auto mb-2"/>

            Events

          </button>




          <button className="bg-green-50 text-green-700 p-4 rounded-lg">

            <ImageIcon className="mx-auto mb-2"/>

            Gallery

          </button>




          <button className="bg-green-50 text-green-700 p-4 rounded-lg">

            <Video className="mx-auto mb-2"/>

            Videos

          </button>




          <button className="bg-green-50 text-green-700 p-4 rounded-lg">

            <MessageSquare className="mx-auto mb-2"/>

            Messages

          </button>


        </div>


      </div>



    </div>

  );
};


export default adminDashboard;