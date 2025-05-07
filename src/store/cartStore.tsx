import { create } from "zustand";

interface CartState {
  cart: Array<{ id: number; title: string; price: number }>;
  addToCart: (product: { id: number; title: string; price: number }) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));

export default useCartStore;