import { create } from "zustand";

interface Food {
  _id: string;
  name: string;
  price: number;
  restaurant: string;
  category: string;
  isAvailable: boolean;
  image: string;
  description: string;
  tags: string[];
}

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

  restaurant: string;
  setRestaurant: (restaurant: string) => void;

  foods: Food[];
  setFoods: (foods: []) => void;

  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;

  editingFoodId: string | null;
  setEditingFoodId: (id: string | null) => void;

  foodDetails: Food | null;
  setFoodDetails: (food: Food | null) => void;
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

  restaurant: "",
  setRestaurant: (restaurant) => set(() => ({ restaurant })),

  foods: [],
  setFoods: (foods) => set(() => ({ foods })),

  isEditing: false,
  setIsEditing: (isEditing) => set(() => ({ isEditing })),

  editingFoodId: null,
  setEditingFoodId: (id) => set({ editingFoodId: id }),

  foodDetails: null,
  setFoodDetails: (food) => set(() => ({ foodDetails: food })),
}));
