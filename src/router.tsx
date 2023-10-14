import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "src/pages/LoadingScene";

const lazyLoad = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );

const DiceScene = lazyLoad(lazy(() => import("src/pages/DiceScene")));

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DiceScene />} />
      </Routes>
    </>
  );
}
