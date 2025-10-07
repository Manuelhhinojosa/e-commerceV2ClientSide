// state
// static state (text)
import { orderConfimationPageText } from "../assets/staticState/staticText";
// for development
const checkout = {
  _id: "1212",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 test st",
    city: "Test city",
    country: "Test country",
  },
};

// Order confirmation page function component
const OrderConfirmationPage = () => {
  // functions
  // to calculate estimate delivery
  const calculateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  // return
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        {orderConfimationPageText.thankyouMessage}
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* order ID and date */}
            <div>
              <h2 className="text-xl font-semibold">
                {`${orderConfimationPageText.orderIdText}: ${checkout._id}`}
              </h2>
              <p className="text-gray-500 ">
                {`${orderConfimationPageText.orderDateText}: ${new Date(
                  checkout.createdAt
                ).toLocaleDateString()}`}
              </p>
            </div>
            {/* estimated delivery date */}
            <div>
              <p className="text-emerald-700 text-sm">
                {orderConfimationPageText.estimatedDeliveryText}:{" "}
                {calculateEstimateDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* order items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item, i) => (
              <div key={i} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md ">${item.price}</p>
                  <p className="text-sm text-gray-500">{`${orderConfimationPageText.quantityText}: ${item.quantity}`}</p>
                </div>
              </div>
            ))}
          </div>

          {/* payment and delivery info */}
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <h4 className="text-lg font-semibold mb-2">
                {orderConfimationPageText.paymentText}
              </h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            {/* delivery info */}
            <div>
              <h4 className="text-lg font-semibold mt-4">
                {orderConfimationPageText.deliveryText}
              </h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city}, {""}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
