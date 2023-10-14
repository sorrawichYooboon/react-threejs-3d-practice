import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingPage from "src/pages/LoadingScene";

const lazyLoad = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );

const DiceScene = lazyLoad(lazy(() => import("src/pages/DiceScene")));
const ShoesScene = lazyLoad(lazy(() => import("src/pages/ShoesScene")));
const PingPongScene = lazyLoad(lazy(() => import("src/pages/PingPongScene")));
const CarRacingScene = lazyLoad(lazy(() => import("src/pages/CarRacingScene")));
const GatsbyStarsScene = lazyLoad(
  lazy(() => import("src/pages/GatsbyStarsScene"))
);

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/gatsby-stars-scene" />} />
        <Route path="/dice-scene" element={<DiceScene />} />
        <Route path="/shoes-scene" element={<ShoesScene />} />
        <Route path="/ping-pong-scene" element={<PingPongScene />} />
        <Route path="/car-racing-scene" element={<CarRacingScene />} />
        <Route path="/gatsby-stars-scene" element={<GatsbyStarsScene />} />
      </Routes>
    </>
  );
}
