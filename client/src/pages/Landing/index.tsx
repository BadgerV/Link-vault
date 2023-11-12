import Header from "../../components/Header";
import SplashSection from "../../components/Splash-section";
import Hero from "../../components/Hero";
import ScrollContainer from "../../components/Scroll-Container";
import { computeAssets } from "../../utils/assets.utils";

export const LandingPage = () => {
  const owned = computeAssets();

  console.log(owned);
  return (
    <>
      <Header />
      <SplashSection />
      <Hero />
      <ScrollContainer />
    </>
  );
};

export default LandingPage;
