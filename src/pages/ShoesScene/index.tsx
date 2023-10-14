import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Shoe from "src/pages/ShoesScene/components/Shoe";
import { routeNaming } from "src/constants/route";

const ShoesScene: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-bold">Shoes Scene</h1>
      <div className="w-[50%] h-[50%]">
        <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
          <Stage environment="city" intensity={0.6}>
            <ambientLight />
            <Shoe color="tomato" position={[0, 0, 0]} />
            <Shoe
              color="orange"
              scale={-1}
              rotation={[0, 0.5, Math.PI]}
              position={[0, 0, -2]}
            />
          </Stage>
          <BakeShadows />
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

export default ShoesScene;
