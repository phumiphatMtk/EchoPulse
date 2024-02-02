import { create } from "zustand";

const componentsState = create((set) => ({
  menuActive: false,
  cpName: "",
  setMenuActive: (value) => set(() => ({ menuActive: value })),
}));

export default componentsState;
