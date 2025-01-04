import { create } from "zustand";

interface foodProps {
  name: string;
  setName: (name: string) => void;

  price: number;
  setPrice: (price: number) => void;

  description: string;
  setDescription: (description: string) => void;

  image: string;
  setImage: (image: string) => void;

  category: string;
  setCategory: (category: string) => void;

  quantity: number;
  setQuantity: (quantity: number) => void;

  tags: string[];
  setTags: (tags: string[]) => void;

  isAvailable: boolean;
  setIsAvailable: (isAvailable: boolean) => void;
}

export const useFoodStore = create<foodProps>((set) => ({
  name: "",
  setName: (name) => set(() => ({ name })),

  price: 0,
  setPrice: (price) => set(() => ({ price })),

  description: "",
  setDescription: (description) => set(() => ({ description })),

  image: "",
  setImage: (image) => set(() => ({ image })),

  category: "",
  setCategory: (category) => set(() => ({ category })),

  quantity: 0,
  setQuantity: (quantity) => set(() => ({ quantity })),

  tags: [],
  setTags: (tags) => set(() => ({ tags })),

  isAvailable: false,
  setIsAvailable: (isAvailable) => set(() => ({ isAvailable })),
}));
