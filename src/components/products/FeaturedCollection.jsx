import { Link } from "react-router-dom";

// state
// static state (text)
import { featuredCollectionText } from "../../assets/staticState/staticText";
// images from assets dir
import featured from "../../assets/images/featured.webp";

// FeaturedCollection function component
const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            {featuredCollectionText.text}
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {featuredCollectionText.text2}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {featuredCollectionText.text3}
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            {featuredCollectionText.text4}
          </Link>
        </div>
        {/* right side */}
        <div className="lg:w-1/2 ">
          <img
            src={featured}
            alt="featuredCollection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
