import { useEffect, useState } from "react";
import { useDeliveryAuthStore } from "@/store/Delivery-store/authStore";
import Cookies from "js-cookie";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { Loader } from "../loader/Loader";

export const OTP = () => {
  const { setShowOTPModal, showOTPModal, setIsLoggedIn, loading, setLoading } =
    useDeliveryAuthStore();
  const initialTime = 5 * 60; // Countdown starts at 5 minute

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [otp, setOtp] = useState(""); // State to store the OTP input

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleConfirmOTP = async () => {
    const Id = Cookies.get("deliveryId");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/delivery/verify-delivery-person`,
        {
          deliveryId: Id,
          otp,
        }
      );

      if (data.success) {
        setShowOTPModal(false);
        setIsLoggedIn(true);
        setLoading(false);
        Cookies.set("isLoggedIn", "true");
        navigate("/delivery/dashboard/profile");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setLoading(false);
        setShowOTPModal(true);
        console.log(error?.response?.data?.message);
      }
    }
  };

  const handleResendOTP = async () => {
    try {
      const Id = Cookies.get("deliveryId");

      const { data } = await axios.post(
        `${
          import.meta.env.VITE_DEVELOPMENT_API_URL
        }/auth/requestNewOTP-delivery-person`,
        {
          deliveryId: Id,
        }
      );

      console.log(data);
      setTimeLeft(initialTime);
      setOtp("");
    } catch (error) {
      console.log(error);
    }
  };

  const isOTPComplete = otp.length === 4; // Check if OTP is fully entered

  return (
    <main>
      <AlertDialog open={showOTPModal} onOpenChange={setShowOTPModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Verify your OTP</AlertDialogTitle>
            <AlertDialogDescription className="flex justify-center items-center">
              <InputOTP
                maxLength={4}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                {/* <InputOTPSeparator /> */}
                {/* <InputOTPGroup> */}
                {/* <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} /> */}
                {/* </InputOTPGroup> */}
              </InputOTP>
            </AlertDialogDescription>

            <AlertDialogDescription className="text-center">
              This OTP will expire in {formatTime(timeLeft)}.
              {timeLeft === 0 && (
                <span>
                  <button
                    className="hover:underline text-blue-500"
                    onClick={handleResendOTP}
                  >
                    {loading ? <Loader /> : "Request new OTP"}
                  </button>
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className={`w-full ${
                isOTPComplete && timeLeft > 0
                  ? "bg-[#4CAF50] hover:bg-[#45a049]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={handleConfirmOTP}
              disabled={!isOTPComplete || timeLeft <= 0}
            >
              {loading ? <Loader /> : "Confirm OTP"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};
