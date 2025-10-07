// State
//   Static state (text)
import { cartDrawerText } from "../../assets/staticState/staticText";

// React router hooks
import { useNavigate } from "react-router-dom";

// Components
import CartContents from "../cart/CartContents";

// Cart drawer component function
const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  // State
  //   Static state (text)
  //   icons
  const _closeIcon = cartDrawerText.icons[0];
  //   React router hooks
  const navigate = useNavigate();

  //   functions
  // to hanlde checkout button
  const handleCheckout = () => {
    toggleCartDrawer();
    navigate("/checkout");
  };

  return (
    // main container
    <div
      className={`fixed top-0 right-0 w-3/4  sm:w-1/2 md:w-[30rem] h-full  bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50
    ${drawerOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <_closeIcon className="h-6 w-6 text-gray-600 hover:text-black" />
        </button>
      </div>
      {/* Cart content */}
      <div className="flex-grow p-4 overflow-y-auto">
        {/* header */}
        <h2 className="text-xl font-semibold mb-4">{cartDrawerText.header}</h2>
        {/* cart elelemts */}
        <CartContents />
      </div>
      {/* Checkout button */}
      <div className="p-4 bg-white sticky bottom-0 ">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          {cartDrawerText.checkooutBtnText}
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          {cartDrawerText.checkoutLeyend}
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
