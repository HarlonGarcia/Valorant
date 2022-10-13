import React, { useState, useEffect } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

const ScrollButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          className="fixed hidden sm:block w-10 h-10 bottom-10 right-10 2xl:w-16 2xl:h-16 rounded-full bg-blue-light/20 border-2 border-blue-light"
          onClick={scrollToTop}
        >
          <ChevronDoubleUpIcon className="p-2 text-blue-light" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
