// react router hooks
import { useNavigate } from "react-router-dom";

// react hooks
import { useState } from "react";

// components
import PaypalButton from "./PaypalButton";

// State
// static state (text)
import { checkoutText } from "../../assets/staticState/staticText";
// products for dev
const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

// Checkout component function
const Checkout = () => {
  // react router hook
  const navigate = useNavigate();
  //   logic
  const [checkId, setCheckId] = useState(null);
  //   shipping address
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  //   functions
  // handle chekcout paypal buttons display
  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckId(1);
  };

  //   handle successfull payment
  const handlePaymentSuccess = (details) => {
    console.log("payment successful", details);
    navigate("/order-confirmation");
  };

  //   return
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}

      {/* header */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">{checkoutText.headerText}</h2>
        <form onSubmit={handleCreateCheckout}>
          {/* details header */}
          <h3 className="text-lg mb-4">{checkoutText.contactDetailsText}</h3>
          <div className="mb-4">
            {/* email */}
            <label className="block text-gray-700 ">
              {checkoutText.emailText}
            </label>
            <input
              type="email"
              value="test@test.test"
              className="w-full h-10 text-center border rounded"
              disabled
            />
          </div>

          {/* firstname */}
          <h3 className="text-lg mb-4">{checkoutText.deliveryText}</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">
                {checkoutText.firstNameText}
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>

            {/* lastname */}
            <div>
              <label className="block text-gray-700">
                {checkoutText.lasttNameText}
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* address */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {checkoutText.addressText}
            </label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* city and postal code */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">
                {checkoutText.cityText}
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700">
                {checkoutText.postalCodeText}
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* country */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {checkoutText.countryText}
            </label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* phone number */}
          <div className="mb-4">
            <label className="block text-gray-700">
              {checkoutText.phoneText}
            </label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* buttons */}
          <div className="mt-6 ">
            {!checkId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                {checkoutText.continueToPaymentBtnText}
              </button>
            ) : (
              <div>
                <PaypalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("payment failed. Try again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">{checkoutText.orderSummaryText}</h3>
        <div className="boder-t py-4 mb-4">
          {cart.products.map((product, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md ">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>{checkoutText.subtotalText}</p>
          <p>${cart.totalPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>{checkoutText.shippingText}</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>{checkoutText.totalText}</p>
          <p>${cart.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
