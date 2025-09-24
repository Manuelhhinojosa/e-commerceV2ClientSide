// React router
import { Link } from "react-router-dom";

// React hooks
import { useState } from "react";

// Components
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/CartDrawer";

// Static state (text)
import { navbarText } from "../../assets/staticState/staticText";

// Navbar component function
const Navbar = () => {
  // Static State
  // Icons
  const _userIcon = navbarText.navbarIcons[0];
  const _shoppingCartIcon = navbarText.navbarIcons[1];
  const _navbarBarsIcon = navbarText.navbarIcons[2];
  const _closeIcon = navbarText.navbarIcons[3];
  // Logic state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  //   functions
  // handle toggle cart drawer
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  //   Hanlde toggle navbar
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  // return
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
              to="/collections/all"
              className="text-gray-700 hover:text-black text-sm  font-medium uppercase"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* icons */}
        <div className="flex items-center space-x-4">
          {/* User icon */}
          <Link to="/profile" className="hover:text-black">
            <_userIcon className="h-6 w-6 text-gray-700" />
          </Link>
          {/* Shopping cart icon */}
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <_shoppingCartIcon className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-red text-white text-xs rounded-full px-2 py-0.5">
              1
            </span>
          </button>
          {/* SearchBar component */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          {/* Navbar button icon */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <_navbarBarsIcon className="h-6 w-6 text-gray-700 " />
          </button>
        </div>
      </nav>
      {/* CartDrawer component */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* mobile navbar */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <_closeIcon className="h-6 w-6 text-gray-600 hover:text-black" />
          </button>
        </div>
        <div className="p-4 ">
          <h2 className="text-xl font-semibold  text-center mb-4">
            {navbarText.headerText}
          </h2>
          <nav className="space-y-5 text-center">
            {navbarText.navbarLinksText.map((linkText, id) => (
              <Link
                key={id}
                to={"#"}
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-white hover:bg-black rounded-xl duration-300"
              >
                {linkText}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
