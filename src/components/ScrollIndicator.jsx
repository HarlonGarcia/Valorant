import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [currentY, setCurrentY] = useState(0);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  scrollY.onChange(() => setCurrentY(scrollY.current));

  return (
    <>
      {currentY !== 0 && (
        <motion.div
          className="w-full fixed h-1.5 top-0 bg-gradient-to-r from-red-dark via-red to-red-dark bg-fixed origin-[0%] z-50"
          style={{ scaleX }}
        />
      )}
    </>
  );
};

export default ScrollIndicator;
