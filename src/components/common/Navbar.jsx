// React router
import { Link } from "react-router-dom";

// Static state (text)
import { navbarText } from "../../assets/staticState/staticText";
const _userIcon = navbarText.navbarIcons[0];
const _shoppingCartIcon = navbarText.navbarIcons[1];
const _navbarBarsIcon = navbarText.navbarIcons[2];

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 ">
        {/* logo */}
        <div>
          <Link to="/" className="text-2xl  font-medium">
            {navbarText.logo}
          </Link>
        </div>

        {/* links */}
        <div className="hidden md:flex space-x-6">
          {navbarText.navbarLinksText.map((link, id) => (
            <Link
              key={id}
              to="#"
              className="text-gray-700 hover:text-black text-sm  font-medium uppercase"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <_userIcon className="h-6 w-6 text-gray-700" />
          </Link>
          <button className="relative hover:text-black">
            <_shoppingCartIcon className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-red text-white text-xs rounded-full px-2 py-0.5">
              1
            </span>
          </button>
          <button className="md:hidden">
            <_navbarBarsIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
