// react router hooks
import { Link } from "react-router-dom";

// state
// static state (Text)
import { productManagementPageText } from "../../assets/staticState/staticText";

// product management fucntion component
const ProductManagement = () => {
  // state
  // for development Mock products
  const products = [
    {
      _id: 1,
      name: "Shirt",
      price: 110,
      sku: 1234,
    },
    {
      _id: 2,
      name: "Shorts",
      price: 100,
      sku: 12344,
    },
  ];

  //   functions
  // handle delete product
  const handleDelete = (id) => {
    if (window.confirm(productManagementPageText.deleteConfirmationMessage)) {
      console.log("Delete product with ID:", id);
    }
  };

  // return
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* header */}
      <h2 className="text-2xl font-bold mb-6">
        {productManagementPageText.header}
      </h2>

      {/* table */}
      <table className="min-w-full text-center text-gray-500">
        {/* head */}
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            <th className="py-3 px-4">{productManagementPageText.nameText}</th>
            <th className="py-3 px-4">{productManagementPageText.priceText}</th>
            <th className="py-3 px-4">{productManagementPageText.skuText}</th>
            <th className="py-3 px-4">
              {productManagementPageText.actionsText}
            </th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {products.length > 0 ? (
            products.map((product, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 cursor-pointer">
                {/* product name */}
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {product.name}
                </td>
                {/* product price */}
                <td className="p-4">${product.price}</td>
                <td className="p-4">{product.sku}</td>
                <td className="p-4">
                  <Link
                    to={`/admin/products/${product._id}/edit`}
                    className="bg-black text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                  >
                    {productManagementPageText.editText}
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-black text-white px-2 py-1 rounded hover:bg-red"
                  >
                    {productManagementPageText.deleteText}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500">
                {productManagementPageText.noProductsFoundText}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
