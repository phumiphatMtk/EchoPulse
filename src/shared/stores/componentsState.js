import { create } from "zustand";

const componentsState = create((set) => ({
  menuActive: false,
  cpName: "home",
  setMenuActive: (value) => set(() => ({ menuActive: value })),
  setCpName: (value) => set(() => ({ cpName: value}))
}));

export default componentsState;
