// React router
import { Link } from "react-router-dom";

// State
// Static state (text)
import { genderCollectionSectionText } from "../../assets/staticState/staticText";

// Assets
// static images
import mensCollectionImg from "../../assets/images/mens-collection.webp";
import womensCollectionImg from "../../assets/images/womens-collection.webp";

// GenderCollectionSeciton function component
const GenderColletionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* collection section 1 */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImg}
            alt="collectionImg"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {genderCollectionSectionText.text}
            </h2>
            <Link
              to={genderCollectionSectionText.link1}
              className="text-gray-900 underline"
            >
              {genderCollectionSectionText.text2}
            </Link>
          </div>
        </div>
        {/* collection section 2 */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImg}
            alt="collectionImg"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {genderCollectionSectionText.text3}
            </h2>
            <Link
              to={genderCollectionSectionText.link2}
              className="text-gray-900 underline"
            >
              {genderCollectionSectionText.text2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderColletionSection;
