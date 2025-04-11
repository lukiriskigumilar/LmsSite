import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (userData) => set({ user: userData }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: "auth-storage", // Unique name for the storage
            partialize: (state) => ({ user: state.user }), // Specify which part of the state to persist
        }
    )
)
