import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Reset Password Content */}
      <main className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4CAF50]">
            Reset Password
          </h2>

          <form>
            <div className="mb-4">
              <Label htmlFor="password">New Password</Label>
              <div className="relative mt-1">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="pl-10 pr-10"
                  placeholder="Enter new password"
                  required
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
            <div className="mb-6">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <div className="relative mt-1">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="pl-10"
                  placeholder="Confirm new password"
                  required
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
            {/* {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )} */}
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
            >
              Reset Password
            </Button>
          </form>

          {/* // <Alert>
            //   <AlertTitle>Password Reset Successful</AlertTitle>
            //   <AlertDescription>
            //     Your password has been successfully reset. You can now log in
            //     with your new password.
            //   </AlertDescription>
            // </Alert> */}

          <div className="mt-4 text-center">
            <a href="#" className="text-[#4CAF50] hover:underline">
              Back to Login
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
