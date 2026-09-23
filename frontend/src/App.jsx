import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}
