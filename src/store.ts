import { create } from "zustand";

type Store = {
  value: string;
  setValue: (params) => void;
};

const useBearStore = create<Store>()((set) => ({
  value: "",
  setValue: (params) => set((state) => ({ value: params })),
}));

export default useBearStore;
