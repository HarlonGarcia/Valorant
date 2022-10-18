import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <header className="w-screen bg-blue-dark border-blue border-b-4 mx-auto h-16 2xl:h-20 flex items-center justify-center md:w-full overflow-x-hidden">
      <ul className="flex text-white font-montserrat mx-auto">
        <NavLink
          end
          to="/"
          className="flex items-center hover:text-red cursor-pointer mr-5 sm:mr-10 lg:mr-14"
        >
          <HomeIcon className="h-6 w-6 mr-2" />
          <h3 className="hidden sm:block md:text-lg 2xl:text-2xl">Home</h3>
        </NavLink>
        <NavLink
          to="/agents"
          className="flex items-center hover:text-red cursor-pointer"
        >
          <UserCircleIcon className="h-6 w-6 sm:mr-2" />
          <h3 className="hidden sm:block md:text-lg 2xl:text-2xl">Agents</h3>
        </NavLink>
      </ul>
    </header>
  );
};

export default NavBar;
