import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const useNotificationStore = create((set) => ({
  toasts: [],
  addToast: (message, type) => set((state) => ({
    toasts: [...state.toasts, {
      id: uuidv4(),
      createdAt: Date.now(),
      message,
      type: type || 'normal'
    }]
  })),
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter(toast => toast.id !== id)
  }))
}));
