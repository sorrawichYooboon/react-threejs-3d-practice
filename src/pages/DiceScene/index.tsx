import React from "react";
import { Link } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "src/pages/DiceScene/components/Box";

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
      <button className="py-2 px-6 border border-1 border-white text-white rounded hover:text-green hover:border-green">
        <Link to="/shoes-scene">Shoes scene</Link>
      </button>
    </div>
  );
};

export default DiceScene;
