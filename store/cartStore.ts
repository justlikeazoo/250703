// store/cartStore.ts
import { create } from 'zustand'

interface Product {
  id: number
  name: string
  price: number
  quantity?: number
}

interface CartState {
  cart: Product[]
  addToCart: (item: Product) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.find((i) => i.id === item.id)
      if (exists) return state
      return { cart: [...state.cart, { ...item, quantity: 1 }] }
    }),
  clearCart: () => set({ cart: [] }),
}))
