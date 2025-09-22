// React router
import { Outlet } from "react-router-dom";

// components
import Header from "../common/Header";
import Footer from "../common/Footer";

// UserLayout component function
const UserLayout = () => {
  // return
  return (
    <>
      <Header />
      <manin>
        <Outlet />
      </manin>
      <Footer />
    </>
  );
};

export default UserLayout;
