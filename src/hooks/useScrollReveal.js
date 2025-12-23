import { useInView } from "framer-motion";
import { useEffect } from "react";

export const useScrollReveal = (controls, ref) => {
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
};
