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

  showOTPModal: boolean;
  setShowOTPModal: (value: boolean) => void;

  showErrorModal: boolean;
  setShowErrorModal: (value: boolean) => void;

  userName: string;
  setUserName: (value: string) => void;

  phoneNumber: string;
  setPhoneNumber: (value: string) => void;

  address: string;
  setAddress: (value: string) => void;

  vehicleType: string | boolean;
  setVehicleType: (value: string) => void;

  bio: string;
  setBio: (value: string) => void;

  status: boolean;
  setStatus: (value: boolean) => void;

  vehicleNumber: string;
  setVehicleNumber: (value: string) => void;
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

  showOTPModal: false,
  setShowOTPModal: (value) => set(() => ({ showOTPModal: value })),

  showErrorModal: false,
  setShowErrorModal: (value) => set(() => ({ showErrorModal: value })),

  userName: "",
  setUserName: (value) => set(() => ({ userName: value })),

  phoneNumber: "",
  setPhoneNumber: (value) => set(() => ({ phoneNumber: value })),

  address: "",
  setAddress: (value) => set(() => ({ address: value })),

  vehicleType: "",
  setVehicleType: (value) => set(() => ({ vehicleType: value })),

  vehicleNumber: "",
  setVehicleNumber: (value) => set(() => ({ vehicleNumber: value })),

  bio: "",
  setBio: (value) => set(() => ({ bio: value })),

  status: false,
  setStatus: (value) => set(() => ({ status: value })),
}));
