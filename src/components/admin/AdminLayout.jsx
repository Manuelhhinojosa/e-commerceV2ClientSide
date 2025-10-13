// react hooks
import { useState } from "react";

// react router hooks
import { Outlet } from "react-router-dom";

// components
import AdminSidebar from "./AdminSidebar";

// state
// static state (text)
import { adminLayoutText } from "../../assets/staticState/staticText";

// Admin layout funcion component
const AdminLayout = () => {
  // state
  // logic (for sidebar)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //   icons
  const _barsIcon = adminLayoutText.icons[0];

  //   functions
  // toogle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // return
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative ">
      {/* mobile toogle button */}
      <div className="flex justify-between  md:hidden p-4 bg-gray-900 text-white z-20">
        <div className="flex">
          <button onClick={toggleSidebar}>
            <_barsIcon size={24} />
          </button>
          <h1 className="ml-4 text-xl font-medium">
            {adminLayoutText.headerText}
          </h1>
        </div>

        <h1>{adminLayoutText.logo}</h1>
      </div>

      {/* overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
      >
        {/* AdminSidebar component */}
        <AdminSidebar />
      </div>

      {/* Main content */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
