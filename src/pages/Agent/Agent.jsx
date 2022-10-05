import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
    <div className="flex flex-col bg-blue-dark h-full w-full items-center p-8">
      {loading && <LoadingSpinner />}
      <div>
        {!loading && !error && (
          <div>
            <h2 className="text-white mb-4">{agent.displayName}</h2>
            <p className="text-white">{agent.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agent;
