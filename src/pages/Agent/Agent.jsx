import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Abilities from "../../components/Abilities/Abilities";
import { agents_images } from "../../utils/agents_images";

const Agent = () => {
  const [loading, setLoading] = useState(true);
  const [agent, setAgent] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_API_URL}/agents/${id}?language=${process.env.REACT_APP_LANG}`
    )
      .then(({ data }) => setAgent(data.data))
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => setTimeout(() => setLoading(false), 500));
  }, [id]);

  if (!agent) return;
  return (
    <div className="flex flex-col bg-blue-dark h-full w-full items-center justify-center p-8 sm:py-14">
      {loading && <LoadingSpinner />}
      <div className="max-w-2xl lg:max-w-3xl mb-12">
        {!loading && !error && (
          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:px-4 lg:px-0">
            <h2 className="text-red font-montserrat text-3xl font-bold inline-block mb-4 sm:text-4xl lg:text-5xl md:mb-2 lg:mb-0">
              {agent.displayName}
            </h2>
            <img
              className="mb-8 sm:pl-4 row-span-3 sm:mb-0 lg:row-span-3 max-h-96 sm:max-h-max"
              src={agents_images[agent.displayName]}
              alt={agent.displayName}
            />

            <div className="flex flex-col row-span-0 mb-8 sm:mb-4 sm:py-4 sm:border-b-2 sm:border-blue-light">
              <div className="flex flex-col items-center sm:flex-row sm:mb-4 lg:bg-red lg:py-2 lg:px-4 lg:w-fit">
                <h3 className="text-blue-light text-xl font-montserrat inline-block mb-2 sm:mb-0 sm:mr-2 sm:text-2xl lg:text-xl lg:font-semibold lg:text-white ">
                  {agent.role.displayName}
                </h3>
                <img
                  className="w-8 h-8 lg:w-6 lg:h-6 "
                  src={agent.role.displayIcon}
                  alt={agent.role.displayName}
                />
              </div>
              <p className="w-full font-montserrat text-white hidden sm:block lg:text-lg md:mb-4 lg:mb-8">
                {agent.role.description}
              </p>
            </div>
            <p className="text-white text-center font-montserrat sm:text-left lg:text-lg">
              <span className="text-red lg:text-xl font-medium">
                Biografia -
              </span>{" "}
              {agent.description}
            </p>
          </div>
        )}
      </div>
      <div className="max-w-2xl lg:max-w-3xl">
        {!loading && !error && <Abilities abilities={agent.abilities} />}
      </div>
    </div>
  );
};

export default Agent;
