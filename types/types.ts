export type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  star: any;
};

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

export interface CartStore {
  carts: Record<string, CartItem[]>;

  addToCart: (
    userId: string,
    item: Omit<CartItem, "quantity">,
    quantity?: number,
  ) => void;

  removeFromCart: (userId: string, id: number) => void;

  increaseQuantity: (userId: string, id: number) => void;

  decreaseQuantity: (userId: string, id: number) => void;

  updateQuantity: (userId: string, id: number, quantity: number) => void;

  clearCart: (userId: string) => void;

  isInCart: (userId: string, id: number) => boolean;

  getItemQuantity: (userId: string, id: number) => number;

  getTotalItems: (userId: string) => number;

  getTotalPrice: (userId: string) => number;
}
