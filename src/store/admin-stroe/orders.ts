import { create } from "zustand";

export interface OrderPropsTypes {
  _id: string;
  status: string;
  createdAt: string;
  orderId: string;
  totalAmount: number;

  user: {
    firstName: string;
    lastName: string;
  };

  item: {
    _id: string;
    restaurant: string[];
    price: number;
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
}));
