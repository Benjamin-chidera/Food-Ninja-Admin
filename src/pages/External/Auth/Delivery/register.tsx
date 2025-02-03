import { Label } from "@radix-ui/react-label";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import axios, { AxiosError } from "axios";
import cookies from "js-cookie";
import { useDeliveryAuthStore } from "@/store/Delivery-store/authStore";
import { OTP } from "@/components/delivery-page/OTP";
import { ErrorModal } from "@/components/modals/Error-modal/ErrorModal";
import { Loader } from "@/components/loader/Loader";

const Register = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    termsAndConditions,
    setTermsAndConditions,
    setShowOTPModal,
    setError,
    setShowErrorModal,
    loading,
    setLoading,
  } = useDeliveryAuthStore();

  // const [passwordRequirements, setPasswordRequirements] = useState({
  //   length: false,
  //   uppercase: false,
  //   number: false,
  // });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const checkPasswordRequirements = (password: string) => {
  //   setPasswordRequirements({
  //     length: password.length >= 8,
  //     uppercase: /[A-Z]/.test(password),
  //     number: /[0-9]/.test(password),
  //   });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setShowErrorModal(true);
        return;
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/delivery/register-delivery-person`,
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      if (data.success) {
        cookies.set("deliveryId", data.deliveryId);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTermsAndConditions(false);
        setLoading(false);
        setShowOTPModal(true);
      }
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        setError(error?.response?.data?.message);
        setLoading(false);
        setShowErrorModal(true);
      }
    }
  };

  return (
    <main>
      {/* Sign Up Content */}
      <section className="container mx-auto my-5  px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4CAF50]">
            Sign Up for Food Ninja
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* first Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <div className="relative">
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="pl-10"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div className="relative">
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="pl-10"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="pl-10 pr-10"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* <div className="text-sm">
                <p
                  className={
                    passwordRequirements.length
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  At least 8 characters
                </p>
                <p
                  className={
                    passwordRequirements.uppercase
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  At least one uppercase letter
                </p>
                <p
                  className={
                    passwordRequirements.number
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  At least one number
                </p>
              </div> */}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="pl-10"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={termsAndConditions}
                onCheckedChange={(checked) =>
                  setTermsAndConditions(checked as boolean)
                }
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link
                  to="/terms-of-services"
                  className="text-[#4CAF50] hover:underline"
                >
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="text-[#4CAF50] hover:underline"
                >
                  Privacy Policy
                </Link>
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !password ||
                !confirmPassword ||
                !termsAndConditions ||
                password !== confirmPassword ||
                loading
              }
            >
              {loading ? <Loader /> : "  Sign Up"}
            </Button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#4CAF50] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </section>

      <OTP />
      <ErrorModal />
    </main>
  );
};

export default Register;
