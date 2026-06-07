import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Founder from "./components/Founder";
import Benefits from "./components/Benefits";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Benefits />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;