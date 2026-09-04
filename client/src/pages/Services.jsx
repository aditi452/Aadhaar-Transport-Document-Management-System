import Navbar from "../components/Navbar";
import ServicesBanner from "../components/ServicesBanner";
import ServiceSearch from "../components/ServiceSearch.jsx";
import ServiceGrid from "../components/ServiceGrid";
import Footer from "../components/Footer";

import "../styles/services.css";
import PopularServices from "../components/PopularServices.jsx";
import ServiceTips from "../components/ServiceTips.jsx";

function Services() {
  return (
    <>
      <Navbar />

      <div className="services-page">
        <ServicesBanner />
        <ServiceSearch />
        <ServiceGrid />
        <PopularServices />
        <ServiceTips />
      </div>

      <Footer />
    </>
  );
}

export default Services;