import { ArrowRight, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDeliveryAuthStore } from "@/store/Delivery-store/authStore";
import axios, { AxiosError } from "axios";
import { ErrorModal } from "@/components/modals/Error-modal/ErrorModal";
import Cookies from "js-cookie";

const ForgotPassword = () => {
  const { email, setEmail, setError, setShowErrorModal } =
    useDeliveryAuthStore();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/forgot-password-delivery-person`,
        { email }
      );

      if (data.success) {
        setEmail("");
        Cookies.set("deliveryId", data.deliveryId);
        navigate("/reset-password");
      }
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        setError(error?.response?.data?.message);
        setShowErrorModal(true);
      }
    }
  };

  return (
    <div>
      {/* Forgot Password Content */}
      <main className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4CAF50]">
            Forgot Password
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative mt-1">
                <Input
                  type="email"
                  id="email"
                  className="pl-10"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
            >
              Reset Password
            </Button>
          </form>

          {/* <Alert>
            <AlertTitle>Check your email</AlertTitle>
            <AlertDescription>
              We've sent a password reset link to {email}. Please check your
              inbox and follow the instructions to reset your password.
            </AlertDescription>
          </Alert> */}

          <div className="mt-4 text-center">
            <Link
              to="/login"
              className="text-[#4CAF50] hover:underline inline-flex items-center"
            >
              <ArrowRight size={16} className="mr-1" /> Back to Login
            </Link>
          </div>
        </div>
      </main>

      <ErrorModal />
    </div>
  );
};

export default ForgotPassword;
