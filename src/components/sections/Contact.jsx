import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/motionVariants";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="py-24 bg-white px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Have a project in mind or need a professional website? Fill out the
          form below and I’ll get back to you as soon as possible.
        </motion.p>

        <motion.form
          variants={fadeUp}
          className="max-w-3xl mx-auto bg-gray-50 p-10 rounded-xl shadow-sm border border-gray-100 text-left"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Details
            </label>
            <textarea
              placeholder="Tell me about your project, timeline, and goals..."
              rows="5"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-semibold transition"
            >
              Send Message
            </button>

            <p className="text-sm text-gray-500 mt-4">
              I usually respond within 24 hours.
            </p>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
