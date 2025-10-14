// State
// static state (Text)
import { orderManagementPageText } from "../../assets/staticState/staticText";

// order management function component
const OrderManagement = () => {
  // state
  // for dev
  // mock data (orders)
  const orders = [
    {
      _id: 1,
      user: {
        name: "TestName TestLastname",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 2,
      user: {
        name: "TestName2 TestLastname2",
      },
      totalPrice: 20,
      status: "Processing",
    },
  ];

  //   functions
  // handle order status change
  const handleStatusChange = (orderId, status) => {
    console.log({
      id: orderId,
      status: status,
    });
  };

  // return
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        {orderManagementPageText.header}
      </h2>

      {/* table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-center text-gray-500">
          {/* thead */}
          <thead className="bg-gray-100 text-sm uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">
                {orderManagementPageText.orderIdText}
              </th>
              <th className="py-3 px-4">
                {orderManagementPageText.customerText}
              </th>
              <th className="py-3 px-4">
                {orderManagementPageText.totalPriceText}
              </th>
              <th className="py-3 px-4">
                {orderManagementPageText.statusText}
              </th>
              <th className="py-3 px-4">
                {orderManagementPageText.actionsText}
              </th>
            </tr>
          </thead>

          {/* tbody */}
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    {order._id}
                  </td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">{order.totalPrice}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                      <option value="Processing">
                        {orderManagementPageText.processingText}
                      </option>
                      <option value="Shipped">
                        {orderManagementPageText.shippedText}
                      </option>
                      <option value="Delivered">
                        {orderManagementPageText.deliveredText}
                      </option>
                      <option value="Cancelled">
                        {orderManagementPageText.cancelledText}
                      </option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-black text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                    >
                      {orderManagementPageText.markStatusText}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
                  {orderManagementPageText.noOrdersText}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrderManagement;
