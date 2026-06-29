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
  cart: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  updateQuantity: (id: number, quantity: number) => void;

  clearCart: () => void;

  isInCart: (id: number) => boolean;

  getItemQuantity: (id: number) => number;

  getTotalItems: () => number;

  getTotalPrice: () => number;
}
