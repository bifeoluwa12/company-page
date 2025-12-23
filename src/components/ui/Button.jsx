import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-lg bg-black text-white font-medium"
    >
      {children}
    </motion.button>
  );
};

export default Button;

