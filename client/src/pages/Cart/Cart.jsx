import useCartStore from "../../store/useCartStore";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCartStore();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-20">
      <h1 className="text-4xl font-black mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-6">

          {cart.map((item) => (
            <div
              key={item._id + item.size}
              className="flex flex-col md:flex-row gap-5 bg-white p-5 rounded-2xl shadow-sm"
            >
              
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  Size: {item.size}
                </p>

                <p className="text-orange-500 font-bold mt-2">
                  ৳{item.price}
                </p>

                <div className="flex items-center gap-4 mt-4">

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item._id,
                        item.size
                      )
                    }
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span className="font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item._id,
                        item.size
                      )
                    }
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>

                </div>
              </div>

              <button
                onClick={() =>
                  removeItem(item._id, item.size)
                }
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold">
              ৳{total}
            </span>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl mt-6">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;