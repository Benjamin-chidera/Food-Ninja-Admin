import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Users, ShoppingBag, Utensils, Truck } from "lucide-react";

export const QuickAction = () => {
  return (
    <div>
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
