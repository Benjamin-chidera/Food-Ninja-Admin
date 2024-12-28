import { Bell, ClipboardList, ScrollText, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DeliveryHome = () => {
  return (
    <div className="m-5">
      {" "}
      <main className="max-w-7xl mx-auto py-6 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Orders</CardTitle>
              <CardDescription>
                Orders you're currently delivering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Available Orders</CardTitle>
              <CardDescription>Orders ready for pickup</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">5</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Today's Earnings</CardTitle>
              <CardDescription>Total earnings for today</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$75.50</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((order) => (
              <li key={order}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#4CAF50] truncate">
                      Order #{order}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        $15.00
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <ClipboardList className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        2 items
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <Truck className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        1.5 miles away
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
                        Accept Order
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Order #1234</CardTitle>
            <CardDescription>
              Estimated delivery time: 25 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Order Details:</h3>
                <p>2x Burger, 1x Fries, 1x Soda</p>
              </div>
              <div>
                <h3 className="font-semibold">Delivery Address:</h3>
                <p>123 Main St, Anytown, AN 12345</p>
              </div>
              <div>
                <h3 className="font-semibold">Customer:</h3>
                <p>John Doe (555-123-4567)</p>
              </div>
              <div className="flex justify-between items-center">
                <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
                  Mark as Delivered
                </Button>
                <Button variant="outline">Contact Support</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((order) => (
              <li key={order}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#4CAF50] truncate">
                      Order #{1000 + order}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <ScrollText className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {new Date().toLocaleDateString()}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <Truck className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        2.3 miles
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      $18.50
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your account details here</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  defaultValue="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  defaultValue="555-123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Type
                </label>
                <select
                  id="vehicle"
                  name="vehicle"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                >
                  <option>Car</option>
                  <option>Bike</option>
                  <option>Scooter</option>
                </select>
              </div>
              <Button type="submit" className="bg-[#4CAF50] hover:bg-[#45a049]">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Stay updated with your delivery activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-gray-200">
              {[
                { title: "New order available", time: "5 minutes ago" },
                { title: "Order #1234 completed", time: "1 hour ago" },
                { title: "Weekly earnings report", time: "1 day ago" },
                {
                  title: "New feature: In-app navigation",
                  time: "3 days ago",
                },
                {
                  title: "Rate adjustment for peak hours",
                  time: "1 week ago",
                },
              ].map((notification, index) => (
                <li key={index} className="py-4">
                  <div className="flex space-x-3">
                    <Bell className="h-6 w-6 text-[#4CAF50]" />
                    <div className="flex-1 space-y-1">
                      <h3 className="text-sm font-medium">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DeliveryHome;
