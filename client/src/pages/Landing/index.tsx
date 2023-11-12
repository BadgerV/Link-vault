import Header from "../../components/Header";
import SplashSection from "../../components/Splash-section";
import Hero from "../../components/Hero";
import ScrollContainer from "../../components/Scroll-Container";
import SubFooter from "../../components/Footer/SubFooter";
import Footer from "../../components/Footer/Footer";
import LaunchVault from "../../components/Launch";
import { useLocation, useParams } from "react-router-dom";
import { getWallet } from "link-vault";

export const LandingPage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Header />
      <SplashSection />
      <Hero />
      <ScrollContainer />
      <SubFooter />
      <Footer />
    </>
  );
};

export default LandingPage;
