import { create } from "zustand";

const componentsState = create((set) => ({
  menuActive: false,
  isOpen1: false,
  isOpen2: false,
  cpName: "home",
  setMenuActive: (value) => set(() => ({ menuActive: value })),
  setCpName: (value) => set(() => ({ cpName: value })),
  toggleAccordion1: () => set((state) => ({ isOpen1: !state.isOpen1 })),
  toggleAccordion2: () => set((state) => ({ isOpen2: !state.isOpen2 })),
}));

export default componentsState;
