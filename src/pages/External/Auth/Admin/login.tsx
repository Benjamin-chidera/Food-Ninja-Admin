import { EyeOff, Lock, Mail, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { useDeliveryAuthStore } from "@/store/Delivery-store/authStore";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ErrorModal } from "@/components/modals/Error-modal/ErrorModal";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    setError,
    setShowErrorModal,
  } = useDeliveryAuthStore();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.title = "Login | Food Ninja";
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login-delivery-person`,
        {
          email,
          password,
        }
      );

      if (data.success) {
        Cookies.set("deliveryId", data.deliveryId);
        setEmail("");
        setPassword("");
        navigate("/admin/food-ninja/dashboard");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error?.response?.data?.message);
        setShowErrorModal(true);
      }
    }
  };

  return (
    <main className="bg-[#4CAF50] h-screen">
      {/* Login Content */}
      <main className="container mx-auto md:py-16 px-4 flex items-center h-screen">
        <div className=" mx-auto bg-white p-8 rounded-lg shadow-md w-[600px] max-w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4CAF50]">
            Welcome back Admin
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
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
            </div>
            <button
              type="submit"
              className="w-full bg-[#4CAF50] text-white font-bold py-2 px-4 rounded-md hover:bg-[#45a049] transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/admin-food-ninja-forgot-password"
              className="text-[#4CAF50] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-6 text-center">
            <p>
              Don't have an account?{" "}
              <Link
                to="/admin-food-ninja-signup"
                className="text-[#4CAF50] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <ErrorModal />
    </main>
  );
};

export default AdminLogin;
