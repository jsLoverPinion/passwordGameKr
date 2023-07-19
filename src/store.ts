import { create } from "zustand";

const useBearStore = create((set) => ({
  value: "",
  setValue: (params) => set((state) => ({ value: params })),
}));

export default useBearStore;
