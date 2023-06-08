import { create } from "zustand"

interface SidebarMobileState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onOpenChange: (isOpen: boolean) => void
}

export const useSidebarMobile = create<SidebarMobileState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onOpenChange: (isOpen: boolean) => set({ isOpen }),
}))
