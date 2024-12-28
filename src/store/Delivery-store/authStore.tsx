import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;

  firstName: string;
  setFirstName: (value: string) => void;

  lastName: string;
  setLastName: (value: string) => void;

  password: string;
  setPassword: (value: string) => void;

  confirmPassword: string;
  setConfirmPassword: (value: string) => void;

  email: string;
  setEmail: (value: string) => void;

  termsAndConditions: boolean;
  setTermsAndConditions: (value: boolean) => void;

  error: string;
  setError: (value: string) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;

  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const useDeliveryAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),

  firstName: "",
  setFirstName: (value) => set(() => ({ firstName: value })),

  lastName: "",
  setLastName: (value) => set(() => ({ lastName: value })),

  password: "",
  setPassword: (value) => set(() => ({ password: value })),

  confirmPassword: "",
  setConfirmPassword: (value) => set(() => ({ confirmPassword: value })),

  email: "",
  setEmail: (value) => set(() => ({ email: value })),

  termsAndConditions: false,
  setTermsAndConditions: (value) => set(() => ({ termsAndConditions: value })),

  error: "",
  setError: (value) => set(() => ({ error: value })),

  loading: false,
  setLoading: (value) => set(() => ({ loading: value })),

  showModal: false,
  setShowModal: (value) => set(() => ({ showModal: value })),
}));
