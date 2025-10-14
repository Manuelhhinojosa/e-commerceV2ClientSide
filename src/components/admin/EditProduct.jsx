// React hooks
import { useState } from "react";

// State
// static state (Text)
import { editProductPageText } from "../../assets/staticState/staticText";

// edit product function component
const EditProduct = () => {
  // state
  // product state
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  //   functions
  // handle change ???
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  //   handle imgage upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  //   handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };
  // return
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      {/* header */}
      <h2 className="text-3xl font-bold mb-6">{editProductPageText.header}</h2>

      {/* form */}
      <form onSubmit={handleSubmit}>
        {/* name field */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {editProductPageText.nameLabelText}
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* description field */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {editProductPageText.descriptionLabelText}
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>
        {/* price input */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {editProductPageText.priceLabelText}
          </label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Count in stock input */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {editProductPageText.countInStockLabelText}
          </label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* sku  input */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {editProductPageText.skuLabelText}
          </label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* sizes input */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {editProductPageText.sizesLabelText} (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* colors input */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            {editProductPageText.colorsLabelText} (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* image upload input */}
        <div className="mb-6">
          {/* label & input */}
          <label className="block font-semibold mb-2">
            {editProductPageText.uploadImgLabelText}
          </label>
          <input type="file" onChange={handleImageUpload} />

          {/* images display */}
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, i) => (
              <div key={i} className="">
                <img
                  src={image.url}
                  alt="Product Image"
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          {editProductPageText.btnText}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
