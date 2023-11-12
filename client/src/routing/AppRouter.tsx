import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";
import CreateLinkPage from "../pages/Create";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateLinkPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
