// react router hooks
import { Link, NavLink, useNavigate } from "react-router-dom";

// state
// static state (text)
import { adminSidebarText } from "../../assets/staticState/staticText";
// icons
const _userIcon = adminSidebarText.icons[0];
const _productsIcon = adminSidebarText.icons[1];
const _orderstIcon = adminSidebarText.icons[2];
const _shoptIcon = adminSidebarText.icons[3];
const _logoutIcon = adminSidebarText.icons[4];

// admin sidebar function component
const AdminSidebar = () => {
  //   react router hooks
  const navigate = useNavigate();

  // functions
  // handle logout
  const handleLogout = () => {
    navigate("/");
  };

  // return
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          {adminSidebarText.logo}
        </Link>
      </div>

      <h2 className="text-xl font-medium mb-6 text-center">
        {adminSidebarText.headerText}
      </h2>

      <nav className="flex flex-col space-y-2">
        {/* users */}
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <_userIcon />
          <span>{adminSidebarText.usersText}</span>
        </NavLink>

        {/* products */}
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <_productsIcon />
          <span>{adminSidebarText.productsText}</span>
        </NavLink>

        {/* orders */}
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <_orderstIcon />
          <span>{adminSidebarText.ordersText}</span>
        </NavLink>

        {/* shop link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <_shoptIcon />
          <span>{adminSidebarText.shopText}</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          className="w-full bg-gray-300 text-black hover:bg-red py-2 px-4 rounded flex items-center justify-center space-x-2"
          onClick={handleLogout}
        >
          <_logoutIcon />
          <span className="">{adminSidebarText.lotoutText}</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
