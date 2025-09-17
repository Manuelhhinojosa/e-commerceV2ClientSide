// Static state (text)
import { topbarText } from "../../assets/staticState/staticText";

// Topbar component function
const Topbar = () => {
  // Static state
  // icons
  const _emailIcon = topbarText.contactIcons[0];

  // return
  return (
    <div className="bg-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="hidden md:flex item-center space-x-4">
          {/* Social media icons */}
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

        {/* Center text */}
        <div className="text-sm text-center flex-grow">
          <span>{topbarText.centerText}</span>
        </div>

        {/* Contact icon */}
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
