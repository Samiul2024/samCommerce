import { create } from "zustand";

const getStoredCart = () => {
  const stored = localStorage.getItem("cart");

  return stored ? JSON.parse(stored) : [];
};

const useCartStore = create((set, get) => ({
  cart: getStoredCart(),

  saveCart: (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    set({ cart });
  },

  addToCart: (product, variant) => {
    if (!variant) return;

    const existing = get().cart.find(
      (item) =>
        item._id === product._id &&
        item.size === variant.size
    );

    let updatedCart;

    if (existing) {
      updatedCart = get().cart.map((item) =>
        item._id === product._id &&
        item.size === variant.size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...get().cart,
        {
          _id: product._id,
          title: product.title,
          image: product.image,
          size: variant.size,
          price: variant.price,
          quantity: 1,
        },
      ];
    }

    get().saveCart(updatedCart);
  },

  increaseQuantity: (_id, size) => {
    const updatedCart = get().cart.map((item) =>
      item._id === _id && item.size === size
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    get().saveCart(updatedCart);
  },

  decreaseQuantity: (_id, size) => {
    const updatedCart = get()
      .cart.map((item) =>
        item._id === _id && item.size === size
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    get().saveCart(updatedCart);
  },

  removeItem: (_id, size) => {
    const updatedCart = get().cart.filter(
      (item) =>
        !(
          item._id === _id &&
          item.size === size
        )
    );

    get().saveCart(updatedCart);
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },
}));

export default useCartStore;