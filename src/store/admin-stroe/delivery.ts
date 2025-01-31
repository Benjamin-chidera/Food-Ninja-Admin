import { create } from "zustand";
import { UserPropsTypes } from "./orders";

interface DeliveryProps {
  deliveryPerson: UserPropsTypes[];
  setDeliveryPerson: (deliveryPerson: UserPropsTypes[]) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  firstName: string;
  setFirstName: (firstName: string) => void;

  lastName: string;
  setLastName: (lastName: string) => void;

  email: string;
  setEmail: (email: string) => void;

  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;

  status: string;
  setStatus: (status: string) => void;

  open: boolean;
  setOpen: (open: boolean) => void;

  deliveryId: string;
  setDeliveryId: (deliveryId: string) => void;
}

export const useDeliveryStore = create<DeliveryProps>((set) => ({
  deliveryPerson: [],
  setDeliveryPerson: (deliveryPerson) => set({ deliveryPerson }),

  loading: false,
  setLoading: (loading) => set({ loading }),

  firstName: "",
  setFirstName: (firstName) => set({ firstName }),

  lastName: "",
  setLastName: (lastName) => set({ lastName }),

  email: "",
  setEmail: (email) => set({ email }),

  phoneNumber: "",
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),

  status: "",
  setStatus: (status) => set({ status }),

  open: false,
  setOpen: (open) => set({ open }),

  deliveryId: "",
  setDeliveryId: (deliveryId) => set({ deliveryId: deliveryId }),
}));
