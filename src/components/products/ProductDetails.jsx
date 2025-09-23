// React hooks
import { useState, useEffect } from "react";

// components
import ProductGrid from "./ProductGrid";

// Sonner's Toast for notification
import { toast } from "sonner";

// State
// static state (text)
import { productDetailsText } from "../../assets/staticState/staticText";
import { productGridText } from "../../assets/staticState/staticText";

// ProductDetails function component
const ProductDetails = () => {
  // state
  // for main img display onClick event
  const [mainImg, setMainImg] = useState("");
  //   for shopping cart
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  //   Functions
  useEffect(() => {
    if (productDetailsText.selectedProduct.images.length > 0) {
      setMainImg(productDetailsText.selectedProduct.images[0].url);
    }
  }, [productDetailsText.selectedProduct]);

  //  for "-" and "+" buttons in best seller section
  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  //   for handling add to cart
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart.", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  // return
  return (
    <div className="p-6 ">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left section */}
          {/* thumbnails  */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {productDetailsText.selectedProduct.images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.altText}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImg === img.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImg(img.url)}
              />
            ))}
          </div>
          {/* main imgage */}
          <div className="md:w-1/2">
            <div className="mb-4">
              {/* <img
                src={mainImg}
                alt={productDetailsText.selectedProduct.images[0].altText}
                className="w-full h-auto object-cover rounded-lg"
              /> */}

              {mainImg && (
                <img
                  src={mainImg}
                  alt={productDetailsText.selectedProduct.images[0].altText}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>
          </div>
          {/* mobile thumbnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {productDetailsText.selectedProduct.images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.altText}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImg === img.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImg(img.url)}
              />
            ))}
          </div>
          {/* right seciton */}
          <div className="md:w-1/2 md:ml-10">
            {/* name */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {productDetailsText.selectedProduct.name}
            </h1>

            {/* price */}
            <p className="text-lg text-gray-600 mb-1 line-through ">
              {productDetailsText.selectedProduct.originalPrice &&
                `$${productDetailsText.selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${productDetailsText.selectedProduct.price}
            </p>

            {/* description */}
            <p className="text-gray-600 mb-4">
              {productDetailsText.selectedProduct.description}
            </p>
            <div className="mb-4">
              {/* color buttons */}
              <p className="text-gray-700 ">Color: </p>
              <div className="flex gap-2 mt-2">
                {productDetailsText.selectedProduct.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            {/* size buttons */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {productDetailsText.selectedProduct.sizes.map((size, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* quantity section */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
            {/* add to cart button */}
            <button
              onClick={() => handleAddToCart()}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : productDetailsText.buttonText}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">
                      {productDetailsText.selectedProduct.brand}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">
                      {productDetailsText.selectedProduct.material}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            {productDetailsText.text}
          </h2>
          <ProductGrid products={productGridText.products} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
