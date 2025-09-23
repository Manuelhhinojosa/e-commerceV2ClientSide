// Components
import Hero from "../components/layout/Hero";
import GenderCollectionSection from "../components/products/GenderColletionSection";
import NewArrivals from "../components/products/NewArrivals";
import ProductDetails from "../components/products/ProductDetails";

// State
// Static state (text)
import { bestSellerText } from "../assets/staticState/staticText";

// Home componentfunction
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* best seller section */}
      <h2 className="text-3xl text-center font-bold mb-4">
        {bestSellerText.text}
      </h2>
      <ProductDetails />
    </div>
  );
};

export default Home;
