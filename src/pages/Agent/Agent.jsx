import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
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
    <div className="flex flex-col bg-blue-dark h-full w-full items-center justify-center p-8">
      {loading && <LoadingSpinner />}
      <div className="max-w-2xl lg:max-w-3xl">
        {!loading && !error && (
          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:px-8">
            <h2 className="text-red font-montserrat text-3xl font-bold inline-block mb-4 sm:text-5xl md:text-6xl md:mb-0">
              {agent.displayName}
            </h2>
            <img
              className="mb-8 px-4 row-span-3 sm:mb-0 lg:row-span-3"
              src={agents_images[agent.displayName]}
              alt={agent.displayName}
            />

            <div className="flex flex-col items-center mb-8 row-span-0 sm:flex-row sm:mb-4 md:mb-0 lg:bg-red lg:py-2 lg:px-4 lg:w-fit">
              <h3 className="text-red text-xl font-montserrat inline-block mb-2 sm:mb-0 sm:mr-4 sm:text-2xl lg:text-white lg:text-4xl">
                {agent.role.displayName}
              </h3>
              <img
                className="w-12 h-12"
                src={agent.role.displayIcon}
                alt={agent.role.displayName}
              />
            </div>

            <p className="text-white text-lg text-center font-montserrat sm:text-left lg:text-xl">
              {agent.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agent;
