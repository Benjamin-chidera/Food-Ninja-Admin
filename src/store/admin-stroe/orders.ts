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

interface UserPropsTypes {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dateJoined: string;
}

interface OrderProps {
  order: OrderPropsTypes[];
  setOrder: (orders: OrderPropsTypes[]) => void;

  users: UserPropsTypes[];
  setUsers: (users: UserPropsTypes[]) => void;
}

export const useOrderStore = create<OrderProps>((set) => ({
  order: [],
  setOrder: (order) => set({ order }),

  users: [],
  setUsers: (users) => set({ users }),
}));
