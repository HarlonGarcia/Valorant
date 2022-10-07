import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Agents = () => {
  const [loading, setLoading] = useState(true);
  const [agents, setAgents] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_API_URL}/agents?language=${process.env.REACT_APP_LANG}`
    )
      .then(({ data }) => setAgents(data.data))
      .catch((e) => {
        console.log("Error fetching agents: " + e);
        setError(e);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  const handleClick = async ({ currentTarget }) => {
    navigate(`/agents/${currentTarget.id}`);
  };

  if (!agents) return;
  return (
    <div className="flex flex-col bg-blue-dark h-full sm:w-full justify-center items-center p-8">
      {loading && <LoadingSpinner />}
      {!loading && !error && (
        <h1 className="font-montserrat text-blue-light py-4 mb-4 md:text-lg xl:text-xl 2xl:text-3xl">
          *Clique no card do agente para ver mais informações
        </h1>
      )}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center">
        {!loading &&
          !error &&
          agents.map(
            (
              {
                uuid,
                displayName,
                description,
                displayIcon,
                isPlayableCharacter,
              },
              index
            ) => {
              // eslint-disable-next-line
              if (!isPlayableCharacter) return;
              return (
                <div
                  onClick={handleClick}
                  key={index}
                  id={uuid}
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
                    <p className="font-montserrat text-white text-sm sm:text-lg sm:max-h-44 py-2 max-w-64 overflow-ellipsis overflow-hidden">
                      {description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Agents;
