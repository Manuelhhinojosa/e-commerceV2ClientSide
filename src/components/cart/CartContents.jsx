import { cartDrawerText } from "../../assets/staticState/staticText";

// CartContents function
const CartContents = () => {
  // State
  //   Static state (text)
  // icons
  const _deleteIcon = cartDrawerText.icons[1];
  // products state (for development)
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?randon=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?randon=2",
    },
  ];
  // return
  return (
    <div>
      {cartProducts.map((product, id) => (
        <div
          key={id}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            {/* image */}
            <img
              className="w-20 h-24 object-cover mr-4 rounded"
              src={product.image}
              alt={product.name}
            />
            <div>
              {/* name, size and color */}
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                {product.size} | {product.color}
              </p>
              {/* increment and decrement buttons */}
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  {cartDrawerText.buttonMinus}
                </button>
                <span className="mx-4 ">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  {cartDrawerText.buttonAdd}
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
              <_deleteIcon className="h-6 w-6 mt-2 text-red" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
