import Hero from "../../components/home/Hero";
import Bestsellers from "../../components/home/Bestsellers";
import BundlesPreview from "../../components/home/BundlesPreview";
import TrustBadges from "../../components/home/TrustBadges";
import WhatsAppButton from "../../components/shared/WhatsAppButton";

const Home = () => {
  return (
    <div>
      <Hero />
      <Bestsellers />
      <BundlesPreview />
      <TrustBadges />
      <WhatsAppButton />
    </div>
  );
};

export default Home;