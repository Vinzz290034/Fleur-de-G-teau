import { create } from "zustand";
import { CartItem, Cake, CakeCustomization, CustomCakeRequest } from "../types";

interface CakeStore {
  cart: CartItem[];
  customCakeRequests: CustomCakeRequest[];
  addToCart: (cake: Cake, customization: CakeCustomization, quantity: number) => void;
  removeFromCart: (cakeId: string) => void;
  updateQuantity: (cakeId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  submitCustomCakeRequest: (request: Omit<CustomCakeRequest, "id" | "submittedAt">) => void;
  getCustomCakeRequests: () => CustomCakeRequest[];
}

export const useCakeStore = create<CakeStore>((set, get) => ({
  cart: [],
  customCakeRequests: [],

  addToCart: (cake, customization, quantity) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.cake.id === cake.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.cake.id === cake.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            cake,
            quantity,
            customization,
          },
        ],
      };
    }),

  removeFromCart: (cakeId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.cake.id !== cakeId),
    })),

  updateQuantity: (cakeId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.cake.id === cakeId ? { ...item, quantity } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),

  getCartTotal: () => {
    const state = get();
    return state.cart.reduce((total, item) => {
      return total + item.cake.price * item.quantity;
    }, 0);
  },

  getCartItemCount: () => {
    const state = get();
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  },

  submitCustomCakeRequest: (request) =>
    set((state) => {
      const newRequest: CustomCakeRequest = {
        ...request,
        id: Date.now().toString(),
        submittedAt: new Date().toISOString(),
      };
      return {
        customCakeRequests: [...state.customCakeRequests, newRequest],
      };
    }),

  getCustomCakeRequests: () => {
    const state = get();
    return state.customCakeRequests;
  },
}));
