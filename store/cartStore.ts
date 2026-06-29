import { CartStore } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item, quantity = 1) => {
        set((state) => {
          const existing = state.cart.find((i) => i.id === item.id);

          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...item, quantity }],
          };
        });
      },

      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== Number(id)),
        }));
      },

      increaseQuantity: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === Number(id)
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }));
      },

      decreaseQuantity: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === Number(id)
              ? {
                  ...item,
                  quantity: Math.max(1, item.quantity - 1),
                }
              : item,
          ),
        }));
      },

      updateQuantity: (id, quantity) => {
        set((state) => ({
          cart:
            quantity <= 0
              ? state.cart.filter((item) => item.id !== Number(id))
              : state.cart.map((item) =>
                  item.id === Number(id) ? { ...item, quantity } : item,
                ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      isInCart: (id) => {
        return get().cart.some((item) => item.id === Number(id));
      },

      getItemQuantity: (id) => {
        return get().cart.find((item) => item.id === Number(id))?.quantity ?? 0;
      },

      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useCartStore;
