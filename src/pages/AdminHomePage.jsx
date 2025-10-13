// react router hooks
import { Link } from "react-router-dom";

// state
// static state (text)
import { adminHomePageText } from "../assets/staticState/staticText";

// admin home page function component
const AdminHomePage = () => {
  // state
  //   for development (fake orders state)
  const orders = [
    {
      _id: 1,
      user: {
        name: "FirstNameTest LastNameTest",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 1,
      user: {
        name: "FirstNameTest LastNameTest",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 1,
      user: {
        name: "FirstNameTest LastNameTest",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 1,
      user: {
        name: "FirstNameTest LastNameTest",
      },
      totalPrice: 110,
      status: "Processing",
    },
    {
      _id: 1,
      user: {
        name: "FirstNameTest LastNameTest",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];
  // return
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        {adminHomePageText.headerText}
      </h1>
      {/* top grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* revenue */}
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">
            {adminHomePageText.revenueText}
          </h2>
          <p className="text-2xl">$100,000</p>
        </div>

        {/* total orders */}
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">
            {adminHomePageText.totalOrdersText}
          </h2>
          <p className="text-2xl">200</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            {adminHomePageText.manageOrdersBtnText}
          </Link>
        </div>

        {/* total products */}
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">
            {adminHomePageText.totalProductsText}
          </h2>
          <p className="text-2xl">100</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            {adminHomePageText.manageProductsBtnText}
          </Link>
        </div>
      </div>

      {/* admin table */}
      <div className="mt-6">
        {/* table header */}
        <h2 className="text-2xl font-bold mb-4">
          {adminHomePageText.recentOrdersText}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center text-gray-500">
            {/* table head */}
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">{adminHomePageText.orderIdText}</th>
                <th className="py-3 px-4">{adminHomePageText.userText}</th>
                <th className="py-3 px-4">
                  {adminHomePageText.totalPriceText}
                </th>
                <th className="py-3 px-4">{adminHomePageText.statusText}</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4">{order.totalPrice}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    {adminHomePageText.noRecentOrdersFoundText}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
