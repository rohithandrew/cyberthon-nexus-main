import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
