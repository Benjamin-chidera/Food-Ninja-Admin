import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  return (
    <div>
      {/* Forgot Password Content */}
      <main className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#4CAF50]">
            Forgot Password
          </h2>

          <form>
            <div className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative mt-1">
                <Input
                  type="email"
                  id="email"
                  className="pl-10"
                  placeholder="Enter your email"
                  required
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
    </div>
  );
};

export default ForgotPassword;
