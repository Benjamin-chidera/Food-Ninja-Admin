import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArrowRight, Download, Star, Truck, Utensils } from "lucide-react";

export const HomeComponent = () => {
  return (
    <main>
      <div className="my-5 text-center">
        <h3 className="text-xl md:text-3xl  font-bold text-center mb-12 text-[#4CAF50]">
          How to Use Food Ninja App
        </h3>
      </div>

      <Tabs defaultValue="customer" className="">
        <TabsList className="grid grid-cols-2 w-[500px] max-w-full mx-auto">
          <TabsTrigger value="customer">Customer</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
        </TabsList>

        <section className="mx-5">
          <TabsContent value="customer">
            {/* How to Use Section - Customer */}
            <section className="py-16 bg-white">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-[#4CAF50] text-white rounded-full p-4 inline-block mb-4">
                      <Download size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Download the App
                    </h4>
                    <p>Get our app from the App Store or Google Play</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#4CAF50] text-white rounded-full p-4 inline-block mb-4">
                      <Utensils size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Choose Your Meal
                    </h4>
                    <p>Browse restaurants and select your favorite dishes</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#4CAF50] text-white rounded-full p-4 inline-block mb-4">
                      <ArrowRight size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Place Your Order
                    </h4>
                    <p>Confirm your order and wait for delivery</p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="delivery">
            {/* How to Use Section - Delivery Person */}
            <section className="py-16 bg-gray-100">
              <div className="container mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12 text-[#4CAF50]">
                  How to Become a Delivery Partner
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-[#4CAF50] text-white rounded-full p-4 inline-block mb-4">
                      <Download size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Sign Up</h4>
                    <p>Register as a delivery partner through our app</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#4CAF50] text-white rounded-full p-4 inline-block mb-4">
                      <Truck size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Start Delivering
                    </h4>
                    <p>Accept orders and start earning money</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#4CAF50] text-white rounded-full p-4 inline-block mb-4">
                      <Star size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Earn Rewards</h4>
                    <p>Get bonuses and incentives for great performance</p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </section>
      </Tabs>
    </main>
  );
};
