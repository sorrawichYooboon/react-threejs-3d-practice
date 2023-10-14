import React from "react";
import { Canvas } from "react-three-fiber";
import Stars from "src/pages/GatsbyStarsScene/components/Stars";
import Overlay from "src/pages/GatsbyStarsScene/components/Overlay";
import { OrbitControls } from "@react-three/drei";

const GatsbyStarsScene: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <OrbitControls makeDefault />
      </Canvas>
      <Overlay />
    </div>
  );
};

export default GatsbyStarsScene;
