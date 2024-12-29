"use client";

import {
  BarChart,
  Users,
  ShoppingBag,
  DollarSign,
  Utensils,
  Truck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminHome = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#4CAF50] mb-8">
        Admin Dashboard
      </h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Restaurants
            </CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart className="h-16 w-16 text-[#4CAF50]" />
              <p className="ml-4 text-sm text-gray-500">
                Revenue chart placeholder
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
              <Users className="h-16 w-16 text-[#4CAF50]" />
              <p className="ml-4 text-sm text-gray-500">
                User growth chart placeholder
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest 5 orders across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Restaurant</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "1234",
                  customer: "John Doe",
                  restaurant: "Joe's Diner",
                  status: "Delivered",
                  total: "$35.50",
                },
                {
                  id: "1235",
                  customer: "Jane Smith",
                  restaurant: "Pizza Palace",
                  status: "In Transit",
                  total: "$22.99",
                },
                {
                  id: "1236",
                  customer: "Bob Johnson",
                  restaurant: "Sushi Spot",
                  status: "Preparing",
                  total: "$48.75",
                },
                {
                  id: "1237",
                  customer: "Alice Brown",
                  restaurant: "Burger Barn",
                  status: "Delivered",
                  total: "$18.50",
                },
                {
                  id: "1238",
                  customer: "Charlie Davis",
                  restaurant: "Taco Town",
                  status: "Placed",
                  total: "$27.25",
                },
              ].map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.restaurant}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Perform common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
            <Users className="mr-2 h-4 w-4" /> Manage Users
          </Button>
          <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
            <Utensils className="mr-2 h-4 w-4" /> Manage Restaurants
          </Button>
          <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
            <Truck className="mr-2 h-4 w-4" /> Manage Delivery Partners
          </Button>
          <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
            <ShoppingBag className="mr-2 h-4 w-4" /> View All Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminHome;
