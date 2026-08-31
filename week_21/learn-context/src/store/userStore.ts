import { create } from "zustand";

type User = {
    username: string;
    age: number;
};

type UserStoreType = {
    user: User | null;
    setUser: (newUser: User | null) => void;
    counter: number;
    inc: () => void;
    dec: () => void;
};

export const userStore = create<UserStoreType>((set) => ({
    user: null,
    setUser: (newUser: User | null) => set({ user: newUser }),
    counter : 0,
    inc : () => set((s) => ({counter : s.counter + 1 })),
    dec : () => set((s) => ({counter : s.counter - 1 }))
}));
