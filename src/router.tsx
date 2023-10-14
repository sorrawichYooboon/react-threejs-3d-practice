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

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dice-scene" />} />
        <Route path="/dice-scene" element={<DiceScene />} />
        <Route path="/shoes-scene" element={<ShoesScene />} />
      </Routes>
    </>
  );
}
