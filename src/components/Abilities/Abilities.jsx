import React, { useState } from "react";
import "./Abilities.css";

const Abilities = ({ abilities }) => {
  const [currentAbility, setCurrentAbility] = useState(0);

  const handleClick = ({ currentTarget }) => {
    const old = document.getElementsByClassName("active-skill");
    old[0]?.classList.remove("active-skill");

    setCurrentAbility(currentTarget.id);
    currentTarget.classList.add("active-skill");
  };

  if (!abilities) return;
  return (
    <div className="max-w-2xl max-w-3xl">
      <div className="flex justify-center bg-gradient-to-r from-blue p-4 mb-4">
        <h2 className="font-montserrat text-white font-semibold text-xl">
          Habilidades
        </h2>
      </div>
      <div className="flex justify-center mb-8">
        <img
          onClick={handleClick}
          className="z-30 -mr-2 rounded-full bg-blue-light/60 p-2 w-16 h-16 border-4
           border-blue-dark cursor-pointer hover:bg-blue-link hover:shadow-lg hover:shadow-blue active-skill"
          id="0"
          src={abilities[0].displayIcon}
          alt={abilities[0].displayName}
        />
        <img
          onClick={handleClick}
          className="z-20 -mr-2 rounded-full bg-blue-light/60 p-2 w-16 h-16 border-4
           border-blue-dark cursor-pointer hover:bg-blue-link hover:shadow-lg hover:shadow-blue"
          id="1"
          src={abilities[1].displayIcon}
          alt={abilities[1].displayName}
        />
        <img
          onClick={handleClick}
          className="z-10 -mr-2 rounded-full bg-blue-light/60 p-2 w-16 h-16 border-4
           border-blue-dark cursor-pointer hover:bg-blue-link hover:shadow-lg hover:shadow-blue"
          id="2"
          src={abilities[2].displayIcon}
          alt={abilities[2].displayName}
        />
        <img
          onClick={handleClick}
          className="z-0 rounded-full bg-blue-light/60 p-2 w-16 h-16 border-4
           border-blue-dark cursor-pointer hover:bg-blue-link hover:shadow-lg hover:shadow-blue"
          id="3"
          src={abilities[3].displayIcon}
          alt={abilities[3].displayName}
        />
      </div>
      <div className="font-montserrat text-center text-white">
        <h3 className="mb-4 text-lg text-blue-light">
          {abilities[currentAbility].displayName}
        </h3>
        <p>{abilities[currentAbility].description}</p>
      </div>
    </div>
  );
};

export default Abilities;
