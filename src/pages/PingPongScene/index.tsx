import React from "react";
import { Link } from "react-router-dom";
import { routeNaming } from "src/constants/route";

const PingPongScene: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-bold">Ping Pong Scene</h1>
      <div className="w-[50%] h-[50%]"></div>
      <div className="flex">
        {routeNaming.map((route) => (
          <button
            key={route.path}
            className="py-2 px-6 border border-1 border-white text-white rounded hover:text-green hover:border-green mr-2"
          >
            <Link to={route.path}>{route.naming}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PingPongScene;
