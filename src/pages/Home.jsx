// Components
import Hero from "../components/layout/Hero";
import GenderCollectionSection from "../components/products/GenderColletionSection";
import NewArrivals from "../components/products/NewArrivals";
import ProductDetails from "../components/products/ProductDetails";
import ProductGrid from "../components/products/ProductGrid";
import FeaturedCollection from "../components/products/FeaturedCollection";

// State
// Static state (text)
import { bestSellerText } from "../assets/staticState/staticText";
import { homeText } from "../assets/staticState/staticText";

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
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">{homeText.text}</h2>
        <ProductGrid products={homeText.placeholderProducts} />
      </div>
      <FeaturedCollection />
    </div>
  );
};

export default Home;
