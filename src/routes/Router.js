import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
const Navigation = lazy(() => {
  return Promise.all([
    import("./Navigation"),
    new Promise((resolve) => setTimeout(resolve, 100)),
  ]).then(([moduleExports]) => moduleExports);
});

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Navigation />}>
        <Navigation />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
