import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRouter;
