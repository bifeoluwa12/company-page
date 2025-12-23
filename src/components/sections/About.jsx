import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/motionVariants";

export default function About() {
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="py-24 px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div variants={fadeUp}>
          <img
            src="/office.jpg"
            alt="BusWeb workspace"
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">BusWeb</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            BusWeb is a web design and development service focused on helping
            businesses establish a strong, professional online presence. We
            specialize in building modern, responsive, and performance-driven
            websites that convert visitors into customers.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Every project is handled with attention to detail, clean code
            structure, and scalability in mind — ensuring your website remains
            fast, secure, and easy to maintain as your business grows.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              View Services
            </a>

            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
