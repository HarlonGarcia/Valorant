import React from "react";
import {
  HomeIcon,
  UserCircleIcon,
  MapIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <div className="w-screen bg-blue-dark mx-auto h-20 flex items-center justify-center md:w-full overflow-x-hidden">
      <ul className="flex text-white mx-auto">
        <li className="flex items-center hover:text-red cursor-pointer mr-5 sm:mr-10">
          <HomeIcon className="h-6 w-6 mr-2" />
          <h3 className="hidden sm:block">Home</h3>
        </li>
        <li className="flex items-center hover:text-red cursor-pointer mr-5 sm:mr-10">
          <UserCircleIcon className="h-6 w-6 mr-2" />
          <h3 className="hidden sm:block">Agents</h3>
        </li>
        <li className="flex items-center hover:text-red cursor-pointer mr-5 sm:mr-10">
          <MapIcon className="h-6 w-6 mr-2" />
          <h3 className="hidden sm:block">Maps</h3>
        </li>
        <li className="flex items-center hover:text-red cursor-pointer">
          <BoltIcon className="h-6 w-6 sm:mr-2" />
          <h3 className="hidden sm:block">Weapons</h3>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
