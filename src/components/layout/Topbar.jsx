// React icons
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

// Static state (text)
import { topbarText } from "../../assets/staticState/staticText";
const _emailIcon = topbarText.contactIcons[0];

const Topbar = () => {
  return (
    <div className="bg-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="hidden md:flex item-center space-x-4">
          {topbarText.mediaIcons.map((_icon, id) => (
            <a
              key={id}
              href={
                id === 0
                  ? topbarText.mediaLinks[0]
                  : id === 1
                  ? topbarText.mediaLinks[1]
                  : id === 2
                  ? topbarText.mediaLinks[2]
                  : ""
              }
              target="_blank"
              className="hover:text-gray-300"
            >
              <_icon className="h-5 w-5" />
            </a>
          ))}
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
            <_emailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
