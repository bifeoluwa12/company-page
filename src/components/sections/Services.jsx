import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/motionVariants";

const services = [
  {
    title: "UI & Web Design",
    desc: "Clean, modern interface designs focused on usability, clarity, and brand consistency across all devices.",
  },
  {
    title: "Web Development",
    desc: "High-performance websites built with React and modern tools, optimized for speed, scalability, and SEO.",
  },
  {
    title: "Brand Identity",
    desc: "Visual branding and digital presence that help your business stand out and communicate trust.",
  },
  {
    title: "SEO Optimization",
    desc: "Search-friendly structure and performance improvements to help your site rank and convert better.",
  },
  {
    title: "Website Maintenance",
    desc: "Ongoing support, updates, and performance monitoring to keep your website secure and reliable.",
  },
  {
    title: "E-commerce Solutions",
    desc: "Conversion-focused online stores with secure checkout and smooth user experience.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="py-24 bg-gray-50 px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Services Designed to Grow Your Business
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 max-w-2xl mx-auto mb-14"
        >
          From design to deployment, we deliver digital solutions that focus on
          performance, usability, and long-term growth.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

