import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserCircleIcon,
  MapIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <div className="w-screen bg-blue-dark border-b-4 border-red mx-auto h-20 flex items-center justify-center md:w-full overflow-x-hidden">
      <ul className="flex text-white font-montserrat mx-auto">
        <NavLink
          end
          to="/"
          className="flex items-center hover:text-red cursor-pointer mr-5 sm:mr-10 lg:mr-28"
        >
          <HomeIcon className="h-6 w-6 mr-2" />
          <h3 className="hidden sm:block">Home</h3>
        </NavLink>
        <NavLink
          to="/agents"
          className="flex items-center hover:text-red cursor-pointer mr-5 sm:mr-10 lg:mr-28"
        >
          <UserCircleIcon className="h-6 w-6 mr-2" />
          <h3 className="hidden sm:block">Agents</h3>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center hover:text-red cursor-pointer mr-5 sm:mr-10 lg:mr-28"
        >
          <MapIcon className="h-6 w-6 mr-2" />
          <h3 className="hidden sm:block">Maps</h3>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center hover:text-red cursor-pointer"
        >
          <BoltIcon className="h-6 w-6 sm:mr-2" />
          <h3 className="hidden sm:block">Weapons</h3>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
