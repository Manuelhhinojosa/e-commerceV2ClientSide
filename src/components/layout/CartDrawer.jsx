// State
//   Static state (text)
import { cartDrawerText } from "../../assets/staticState/staticText";

// Cart drawer component function
const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  // State
  //   Static state (text)
  //   icons
  const _closeIcon = cartDrawerText.icons[0];

  return (
    <div
      className={`fixed top-0 right-0 w-3/4  sm:w-1/2 m:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50
    ${drawerOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <_closeIcon className="h-6 w-6 text-gray-600 " />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
