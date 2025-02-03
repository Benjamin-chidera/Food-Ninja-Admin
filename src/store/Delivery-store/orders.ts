import { create } from "zustand";

export interface OrderPropsTypes {
  _id: string;
  status: string;
  createdAt: string;
  orderId: string;
  totalAmount: number;
  address: string;
  price: any;
  distance: any;
  estimatedTime: any;

  user: {
    firstName: string;
    lastName: string;
    location: string;
  };

  item: {
    _id: string;
    restaurant: string;
    price: number;
    distance: any;
    estimatedTime: any;
  }[];
}

export interface UserPropsTypes {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dateJoined: string;
  status: string;
  phoneNumber: string;
  rating: number;
}

interface OrderProps {
  order: OrderPropsTypes[];
  setOrder: (orders: OrderPropsTypes[]) => void;

  users: UserPropsTypes[];
  setUsers: (users: UserPropsTypes[]) => void;

  deliveryPerson: UserPropsTypes[];
  setDeliveryPerson: (deliveryPerson: UserPropsTypes[]) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  open: boolean;
  setOpen: (open: boolean) => void;

  orderId: string;
  setOrderId: (orderId: string) => void;

  status: string;
  setStatus: (status: string) => void;
}

export const useOrderStore = create<OrderProps>((set) => ({
  order: [],
  setOrder: (order) => set({ order }),

  users: [],
  setUsers: (users) => set({ users }),

  deliveryPerson: [],
  setDeliveryPerson: (deliveryPerson) => set({ deliveryPerson }),

  loading: false,
  setLoading: (loading) => set({ loading }),

  open: false,
  setOpen: (open) => set({ open }),

  orderId: "",
  setOrderId: (orderId) => set({ orderId }),

  status: "",
  setStatus: (status) => set({ status }),
}));
