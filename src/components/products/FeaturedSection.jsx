// state
// static state (text)
import { featuredSectionText } from "../../assets/staticState/staticText";

// FeaturedSection function component
const FeaturedSection = () => {
  // state
  // static state (icons)
  const _shopingBagIcon = featuredSectionText.icons[0];
  const _arrowIcon = featuredSectionText.icons[1];
  const _creditCardIcon = featuredSectionText.icons[2];

  //   return
  return (
    <section className="py-16 px-4 bg-white ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <_shopingBagIcon className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">{featuredSectionText.text}</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            {featuredSectionText.text2}
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <_arrowIcon className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">{featuredSectionText.text3}</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            {featuredSectionText.text4}
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <_creditCardIcon className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">{featuredSectionText.text5}</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            {featuredSectionText.text6}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
