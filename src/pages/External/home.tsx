import { HomeComponent } from "@/components/home/home";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    document.title = "Food Ninja";
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <header className="md:bg-[#4CAF50] md:text-[#FFFFFF] text-[#4CAF50] md:py-20 py-5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Delicious Food, Delivered Fast
          </h2>
          <p className="text-xl mb-8">
            Order from your favorite restaurants with just a few taps!
          </p>
          <button className="bg-white text-[#4CAF50] font-bold py-2 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      <HomeComponent />

      <section>
        {/* App Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-[#4CAF50]">
              Why Choose FoodExpress?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                  Wide Restaurant Selection
                </h4>
                <p>Choose from hundreds of local restaurants and cuisines</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                  Fast Delivery
                </h4>
                <p>Get your food delivered hot and fresh in no time</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                  Live Chat
                </h4>
                <p>Chat with your delivery driver and get help instantly</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                  Easy Tracking
                </h4>
                <p>
                  Track your order in real-time from restaurant to your doorstep
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-[#4CAF50]">
                  Secure Payments
                </h4>
                <p>Multiple payment options with secure transactions</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
