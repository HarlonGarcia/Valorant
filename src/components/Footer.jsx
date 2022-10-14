import React from "react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="flex justify-center z-40 items-center w-full p-8 bg-blue sm:px-16 lg:px-32">
      <ul className="text-white/90 text-sm font-montserrat sm:flex sm:justify-end md:text-md">
        <li className="flex items-center mb-4 sm:mb-0 sm:mr-4">
          This website is not official and not endorsed by Riot Games in any
          way. Riot Games, Valorant, and all associated properties are
          trademarks or registered trademarks of Riot Games, Inc.
        </li>
        <li className="flex items-center bg-blue-dark/30 hover:bg-blue-dark w-fit h-fit px-2 py-1 rounded">
          <CodeBracketSquareIcon className="h-5 w-5 mr-2" />
          <a
            href="https://github.com/HarlonGarcia"
            rel="noreferrer"
            target="_blank"
          >
            github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
