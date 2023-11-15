import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CustomHashLoader } from "../components/HashLoader/Hashloader";

const LandingPage = lazy(() => import("../pages/Landing"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Bills = lazy(() => import("../pages/Bills"));
const SendMoney = lazy(() => import("../pages/SendMoney"));
const Details = lazy(() => import("../pages/Details"));
const PaymentMethod = lazy(() => import("../pages/PaymentMethod"));
const VaultPage = lazy(() => import("../pages/VaultScanner"));
const AppRouter = () => {
  return (
    <Suspense fallback={<CustomHashLoader color="#409099" size={60} />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/:vaultKey" element={<VaultPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="pay-bills" element={<Bills />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/send-money/details" element={<Details />} />
        <Route path="/send-money/pay" element={<PaymentMethod />} />
        <Route path="/app" element={<VaultPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
