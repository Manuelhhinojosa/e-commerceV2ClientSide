// React hooks
import { useState, useEffect } from "react";

// React router hooks
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// state
// static state (text)
import { orderDetailsPageText } from "../assets/staticState/staticText";

// order details page function component
const OrderDetailsPage = () => {
  // state
  // to get the id
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  //   mock data for dev
  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "payPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "testCity", country: "testCountry" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 150,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  // return
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* header */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        {orderDetailsPageText.header}
      </h2>

      {/* order details */}
      {!orderDetails ? (
        // no order details
        <p className="p-4 sm:p-6 rounded-lg border text-center font-semibold">
          {orderDetailsPageText.noOrderDetailsText}
        </p>
      ) : (
        // details
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg me:text-xl font-semibold">
                {`${orderDetailsPageText.orderIdText}: #${orderDetails._id}`}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red text-white"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid
                  ? `${orderDetailsPageText.approvedText}`
                  : `${orderDetailsPageText.pendingText}`}
              </span>

              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered
                  ? `${orderDetailsPageText.deliveredText}`
                  : `${orderDetailsPageText.deliveryPendingText}`}
              </span>
            </div>
          </div>

          {/* payment and shipping info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">
                {orderDetailsPageText.paymentInfoText}
              </h4>
              <p>
                {orderDetailsPageText.paymentMethodText}: {""}
                {orderDetails.paymentMethod}
              </p>
              <p>
                {orderDetailsPageText.statusText}: {""}
                {orderDetails.isPaid
                  ? `${orderDetailsPageText.paidText}`
                  : `${orderDetailsPageText.notPaidText}`}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                {orderDetailsPageText.shippingInfoText}
              </h4>
              <p>
                {orderDetailsPageText.shippingMethodText}: {""}
                {orderDetails.shippingMethod}
              </p>
              <p>
                {orderDetailsPageText.addressText}: {""}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* products list */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">
              {orderDetailsPageText.producstText}
            </h4>

            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">
                    {orderDetailsPageText.tableText1}
                  </th>
                  <th className="py-2 px-4">
                    {orderDetailsPageText.tableText2}
                  </th>
                  <th className="py-2 px-4">
                    {orderDetailsPageText.tableText3}
                  </th>
                  <th className="py-2 px-4">
                    {orderDetailsPageText.tableText4}
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {orderDetails.orderItems.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2 px-4 flex justify-start items-center ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline "
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4 text-center">{item.price}</td>
                    <td className="py-2 px-4 text-center">{item.quantity}</td>
                    <td className="py-2 px-4 text-center">
                      {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* back button */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            {orderDetailsPageText.backBtnText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
