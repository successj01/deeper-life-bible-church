import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceTimes from "../components/ServiceTimes";
import MinistriesSection from "../components/MinistriesSection";
import EventsSection from "../components/EventsSection";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";


const Home = () => {
  return (
    <main className="overflow-hidden">

      {/* Hero Banner */}
      <HeroSection />


      {/* Church Introduction */}
      <section>
        <AboutSection />
      </section>


      {/* Service Information */}
      <section>
        <ServiceTimes />
      </section>


      {/* Church Ministries */}
      <section>
        <MinistriesSection />
      </section>


      {/* Upcoming Events */}
      <section>
        <EventsSection />
      </section>


      {/* Members Testimonies */}
      <section>
        <Testimonial />
      </section>


      {/* Newsletter / Updates */}
      <section>
        <Newsletter />
      </section>

    </main>
  );
};


export default Home;