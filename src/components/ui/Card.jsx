import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motionVariants";

const Card = ({ title, text }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 bg-white rounded-xl shadow-md"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
};

export default Card;
