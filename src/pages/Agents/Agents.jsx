import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Agents = () => {
  const [loading, setLoading] = useState(true);
  const [agents, setAgents] = useState(null);

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_API_URL}/agents?language=${process.env.REACT_APP_LANG}`
    )
      .then(({ data }) => setAgents(data.data))
      .finally(() => {
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  if (!agents) return;
  return (
    <div className="flex flex-col bg-blue-dark h-full sm:w-full sm:flex-row sm:flex-wrap justify-center p-8">
      {loading && <LoadingSpinner />}
      {!loading &&
        agents.map(
          (
            { displayName, description, displayIcon, isPlayableCharacter },
            index
          ) => {
            // eslint-disable-next-line
            if (!isPlayableCharacter) return;
            return (
              <div
                key={index}
                className="group bg-red mb-8 object-cover sm:flex-col sm:w-56 lg:w-64 sm:m-4 lg:m-4 border-4 border-blue sm:flex
               hover:bg-blue-light hover:scale-[1.025] cursor-pointer"
              >
                <img
                  className="w-full bg-blue sm:h-56 sm:w-56 lg:w-64 lg:h-64 group-hover:grayscale-[55%]"
                  src={displayIcon}
                  alt={displayName}
                />
                <div className="p-4 h-full sm:h-60">
                  <h2 className="font-montserrat font-black text-center sm:text-left text-lg sm:text-xl text-red-dark group-hover:text-white">
                    {displayName}
                  </h2>
                  <p className=" font-montserrat text-white text-sm sm:text-lg sm:max-h-44 py-2 max-w-64 overflow-ellipsis overflow-hidden">
                    {description}
                  </p>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default Agents;