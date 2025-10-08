// React hooks
import { useState, useEffect } from "react";

// react router hooks
import { useNavigate } from "react-router-dom";

// State
// Static state (text)
import { myOrdersPageText } from "../assets/staticState/staticText";

// MyOrdersPage function component
const MyOrdersPage = () => {
  // state
  // for user's orders
  const [orders, setOrders] = useState([]);

  //   react router hooks
  const navigate = useNavigate();

  //   functions
  // to simulate the loading of orders for dev
  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: 1,
          createdAt: new Date(),
          shippingAddress: { city: "City", country: "Country" },
          orderItems: [
            {
              name: "Product",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: 2,
          createdAt: new Date(),
          shippingAddress: { city: "City", country: "Country" },
          orderItems: [
            {
              name: "Product",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    }),
      1000;
  }, []);

  //   handle row click
  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  // return
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold m-6">
        {myOrdersPageText.headerText}
      </h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">{myOrdersPageText.thText1}</th>
              <th className="py-2 px-4 sm:py-3">{myOrdersPageText.thText2}</th>
              <th className="py-2 px-4 sm:py-3">{myOrdersPageText.thText3}</th>
              <th className="py-2 px-4 sm:py-3">{myOrdersPageText.thText4}</th>
              <th className="py-2 px-4 sm:py-3">{myOrdersPageText.thText5}</th>
              <th className="py-2 px-4 sm:py-3">{myOrdersPageText.thText6}</th>
              <th className="py-2 px-4 sm:py-3">{myOrdersPageText.thText7}</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:border-b-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap text-center">
                    # {order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}.`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    $ {order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red text-white"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid
                        ? myOrdersPageText.paidText
                        : myOrdersPageText.notPaidText}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="py-4 px-4 text-center text-gray-500 "
                >
                  {myOrdersPageText.tdTextNoOdersMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
