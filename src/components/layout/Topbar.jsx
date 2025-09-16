// React icons
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-[#e82e0e] text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="hidden md:flex item-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <span>We ship worlwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+4161231234" className="hover:text-gray-300">
            +1 (416) 123-1234
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
