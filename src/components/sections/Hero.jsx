import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motionVariants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-24 w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Build a Strong Online Presence with{" "}
            <span className="text-blue-300">BusWeb</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-8">
            We design and develop fast, responsive, and SEO-optimized websites
            that help businesses attract customers and grow revenue.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition"
            >
              Get a Free Consultation
            </a>

            <a
              href="#services"
              className="border border-blue-300 hover:bg-blue-600 hover:border-blue-600 px-8 py-3 rounded-full font-semibold transition"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
