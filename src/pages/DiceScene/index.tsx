import React from "react";
import { Link } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "src/pages/DiceScene/components/Box";
import { routeNaming } from "src/constants/route";

const DiceScene: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-bold">Dice Scene</h1>
      <div className="w-[50%] h-[50%]">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <OrbitControls makeDefault autoRotate />
        </Canvas>
      </div>
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

export default DiceScene;
