// Reacat router
import { Link } from "react-router-dom";

// Assests
// images
import heroImg from "../../assets/images/hero.webp";

// State
// Static state (text)
import { heroText } from "../../assets/staticState/staticText";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="heroOmg"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute  inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            {heroText.headerText}
            <br />
            {heroText.headerText2}
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            {heroText.headerText3}
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            {heroText.heroBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
