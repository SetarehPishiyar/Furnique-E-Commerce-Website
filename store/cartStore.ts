import { CartStore } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      carts: {},

      getUserCart: (userId: string) => {
        return get().carts[userId] || [];
      },

      addToCart: (userId, item, quantity = 1) => {
        set((state) => {
          const cart = state.carts[userId] || [];

          const existing = cart.find((i) => i.id === item.id);

          let updated;

          if (existing) {
            updated = cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i,
            );
          } else {
            updated = [...cart, { ...item, quantity }];
          }

          return {
            carts: {
              ...state.carts,
              [userId]: updated,
            },
          };
        });
      },

      removeFromCart: (userId, id) => {
        set((state) => {
          const cart = state.carts[userId] || [];

          return {
            carts: {
              ...state.carts,
              [userId]: cart.filter((item) => item.id !== Number(id)),
            },
          };
        });
      },

      increaseQuantity: (userId, id) => {
        set((state) => {
          const cart = state.carts[userId] || [];

          return {
            carts: {
              ...state.carts,
              [userId]: cart.map((item) =>
                item.id === Number(id)
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            },
          };
        });
      },

      decreaseQuantity: (userId, id) => {
        set((state) => {
          const cart = state.carts[userId] || [];

          return {
            carts: {
              ...state.carts,
              [userId]: cart.map((item) =>
                item.id === Number(id)
                  ? {
                      ...item,
                      quantity: Math.max(1, item.quantity - 1),
                    }
                  : item,
              ),
            },
          };
        });
      },

      updateQuantity: (userId, id, quantity) => {
        set((state) => {
          const cart = state.carts[userId] || [];

          return {
            carts: {
              ...state.carts,
              [userId]:
                quantity <= 0
                  ? cart.filter((item) => item.id !== Number(id))
                  : cart.map((item) =>
                      item.id === Number(id) ? { ...item, quantity } : item,
                    ),
            },
          };
        });
      },

      clearCart: (userId) => {
        set((state) => {
          const newCarts = { ...state.carts };
          delete newCarts[userId];

          return { carts: newCarts };
        });
      },

      isInCart: (userId, id) => {
        const cart = get().carts[userId] || [];
        return cart.some((item) => item.id === Number(id));
      },

      getItemQuantity: (userId, id) => {
        const cart = get().carts[userId] || [];
        return cart.find((item) => item.id === Number(id))?.quantity ?? 0;
      },

      getTotalItems: (userId) => {
        const cart = get().carts[userId] || [];
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: (userId) => {
        const cart = get().carts[userId] || [];
        return cart.reduce(
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
