// React icons
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

// Static state (text)
import topbarText from "../../assets/staticState/staticText";

const Topbar = () => {
  return (
    <div className="bg-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="hidden md:flex item-center space-x-4">
          <a
            href={topbarText.metaLink}
            target="_blank"
            className="hover:text-gray-300"
          >
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a
            href={topbarText.instagramLink}
            target="_blank"
            className="hover:text-gray-300"
          >
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a
            href={topbarText.xLink}
            target="_blank"
            className="hover:text-gray-300"
          >
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <span>{topbarText.centerText}</span>
        </div>
        <div className="text-sm hidden md:block">
          <a
            href={`mailto:${topbarText.contactEmail}`}
            target="_blank"
            className="hover:text-gray-300"
          >
            <TfiEmail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
