import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import StatsSection from "../components/StatsSection";
import GovernmentServices from "../components/GovernmentServices";
import DocumentsSection from "../components/DocumentsSection";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
     <StatsSection />
    <GovernmentServices />
      <DocumentsSection />
      <Footer />
    </>
  );
}

export default Home;