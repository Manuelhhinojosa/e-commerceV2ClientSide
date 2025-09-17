// Components
import Topbar from "../layout/Topbar";
import Navbar from "./Navbar";

// Header component function
const Header = () => {
  // return
  return (
    <header>
      <Topbar />
      <Navbar />
      {/* Cart Drawer */}
    </header>
  );
};

export default Header;
