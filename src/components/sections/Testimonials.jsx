import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/motionVariants";

import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";

const testimonials = [
  {
    name: "Babawale Ifeoluwa",
    role: "Founder, BusWeb Solutions",
    message:
      "The project was delivered with clear structure and attention to detail. The website is responsive, fast, and easy to maintain.",
    image: user1,
  },
  {
    name: "David Michael",
    role: "Marketing Lead, NexaTech",
    message:
      "Communication was smooth throughout the project. The final result improved usability and overall site performance.",
    image: user2,
  },
  {
    name: "Juliet Babs",
    role: "Creative Director, Bloom Apparel",
    message:
      "The website feels polished and professional. It works perfectly across devices and reflects our brand clearly.",
    image: user3,
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="py-24 bg-blue-50 px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Trusted by Clients
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Feedback from businesses we’ve worked with, highlighting our focus on
          quality, performance, and clear communication.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
              />

              <p className="text-gray-600 mb-6 italic leading-relaxed">
                “{t.message}”
              </p>

              <h3 className="text-lg font-semibold text-blue-600">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
