import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";
import CreateLinkPage from "../pages/Create";
import LaunchVaultPage from "../pages/LaunchVault";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateLinkPage />} />
        <Route path="/:vaultKey" element={<LaunchVaultPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
