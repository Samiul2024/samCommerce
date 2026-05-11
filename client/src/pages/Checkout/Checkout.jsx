import { useState } from "react";
import axios from "axios";

import useCartStore from "../../store/useCartStore";

const Checkout = () => {
  const { cart, clearCart } = useCartStore();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,

      items: cart.map((item) => ({
        productId: item._id,
        title: item.title,
        image: item.image,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      })),

      totalAmount: total,
    };

    try {
      await axios.post(
        "http://localhost:5000/api/orders",
        orderData
      );

      alert("Order placed successfully!");

      clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-11/12 max-w-6xl mx-auto py-20">
      <div className="grid lg:grid-cols-2 gap-10">

        <form
          onSubmit={handleOrder}
          className="bg-white p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-3xl font-black mb-8">
            Checkout
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              name="customerName"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              required
              onChange={handleChange}
              className="w-full border p-4 rounded-xl h-32"
            />

            <select
              name="paymentMethod"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl"
            >
              <option value="cod">
                Cash on Delivery
              </option>

              <option value="bkash">
                bKash
              </option>

              <option value="nagad">
                Nagad
              </option>

              <option value="sslcommerz">
                SSLCommerz
              </option>
            </select>

            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold">
              Place Order
            </button>

          </div>
        </form>

        <div className="bg-white p-8 rounded-2xl shadow-sm h-fit">
          <h2 className="text-3xl font-black mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">

            {cart.map((item) => (
              <div
                key={item._id + item.size}
                className="flex justify-between"
              >
                <div>
                  <p className="font-semibold">
                    {item.title}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.size} × {item.quantity}
                  </p>
                </div>

                <p className="font-bold">
                  ৳
                  {item.price * item.quantity}
                </p>
              </div>
            ))}

          </div>

          <div className="border-t mt-8 pt-5 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>৳{total}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;