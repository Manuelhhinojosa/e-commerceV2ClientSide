// Components
import Hero from "../components/layout/Hero";
import GenderCollectionSection from "../components/products/GenderColletionSection";
import NewArrivals from "../components/products/NewArrivals";

// Home componentfunction
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
    </div>
  );
};

export default Home;
