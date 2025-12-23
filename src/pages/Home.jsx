import { motion } from "framer-motion";
import { staggerContainer } from "../animations/motionVariants";

import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />

      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </motion.main>

      <Footer />
    </>
  );
};

export default Home;