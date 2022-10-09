import React from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="w-full fixed h-1 sm:h-1.5 top-0 bg-red left-0 right-0 origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollIndicator;
