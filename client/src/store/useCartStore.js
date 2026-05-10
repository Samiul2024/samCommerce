import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product, variant) => {
    const existing = get().cart.find(
      (item) =>
        item._id === product._id &&
        item.size === variant.size
    );

    if (existing) {
      const updated = get().cart.map((item) =>
        item._id === product._id &&
        item.size === variant.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      set({ cart: updated });
    } else {
      set({
        cart: [
          ...get().cart,
          {
            ...product,
            size: variant.size,
            price: variant.price,
            quantity: 1,
          },
        ],
      });
    }
  },
}));

export default useCartStore;