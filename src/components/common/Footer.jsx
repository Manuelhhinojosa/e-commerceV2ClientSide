// React router
import { Link } from "react-router-dom";

// Static state (text)
import { footerText } from "../../assets/staticState/staticText";

// Footer component  function
const Footer = () => {
  // return
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">{footerText.text1}</h3>
          <p className="text-gray-500 mb-4">{footerText.text2}</p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            {footerText.text3}
          </p>
          {/* newsletter form */}
          <form className="flex mt-4">
            <input
              type="email"
              placeholder={footerText.placeHolderFormText}
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm ml-1 rounded-r-md hover:bg-gray-800 transition-all"
            >
              {footerText.subBtnText}
            </button>
          </form>
        </div>
        {/* shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">{footerText.text4}</h3>
          <ul className="space-y-2 text-gray-600 ">
            {footerText.footerLinksText.map((linkText, id) => (
              <li key={id}>
                <Link
                  key={id}
                  to={"#"}
                  className="hover:text-gray-500 transition-colors "
                >
                  {linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">{footerText.text5}</h3>
          <ul className="space-y-2 text-gray-600 ">
            {footerText.footerTextLinks2.map((linkText, id) => (
              <li key={id}>
                <Link
                  key={id}
                  to={"#"}
                  className="hover:text-gray-500 transition-colors "
                >
                  {linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* follow section */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">{footerText.text6}</h3>
          <div className="flex items-center space-x-4 mb-6">
            {footerText.mediaIcons.map((_icon, id) => (
              <a
                key={id}
                href={footerText.mediaLinks[id]}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <_icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-gray-500 ">{footerText.text7}</p>
          <p>
            {footerText.phoneIcon.map((_icon, id) => (
              <_icon key={id} className="inline-block mr-2" />
            ))}
            {footerText.phoneNumberText}
          </p>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200  pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          &copy; {footerText.bottomText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
