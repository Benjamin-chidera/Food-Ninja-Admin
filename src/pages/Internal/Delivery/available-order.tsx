"use client";

import React, { useEffect, useState } from "react";
import {
  ClipboardList,
  Truck,
  DollarSign,
  Clock,
  MapPin,
  User,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useOrderStore } from "../../../store/Delivery-store/orders";

export default function AvailableOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const { order, setOrder } = useOrderStore();

  const url = import.meta.env.VITE_API_URL;

  const getOrders = async () => {
    try {
      const { data } = await axios(`${url}/customer/orders`);

      // console.log(data);
      setOrder(data.order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  // console.log(
  //   order.filter((order) =>
  //     order.item.filter((item) => item.restaurant === "tatee")
  //   )
  // );

  const filteredOrders = order.filter(
    (order) =>
      order.item.find((item) =>
        item.restaurant.toLowerCase().includes(searchTerm.toLowerCase())
      ) || order?.address?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  console.log(filteredOrders);

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortBy === "distance") return a.distance - b.distance;
    if (sortBy === "price") return b.price - a.price;
    if (sortBy === "estimatedTime") return a.estimatedTime - b.estimatedTime;
    return 0;
  });

  console.log(sortedOrders);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#4CAF50]">
        Available Orders
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Search by restaurant or address"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="distance">Distance</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="estimatedTime">Estimated Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedOrders.map((items) =>
          items.item.map((order) => (
            <Card
              key={order._id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className=" capitalize">{order.restaurant}</span>
                  <Badge variant="secondary">#{order._id[0]}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <ClipboardList className="mr-2 h-4 w-4 text-[#4CAF50]" />
                      <span>{items.item.length} items</span>
                    </div>
                    <div className="flex items-center font-semibold">
                      <DollarSign className="mr-1 h-4 w-4 text-[#4CAF50]" />
                      <span>{items.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Truck className="mr-2 h-4 w-4 text-[#4CAF50]" />
                      <span>
                        {order?.distance?.toFixed(1) || "0.7 miles"} miles
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-[#4CAF50]" />
                      <span>{order?.estimatedTime || "10 mins"} mins</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-2 h-4 w-4 text-[#4CAF50] mt-1 flex-shrink-0" />
                    <span className="text-sm">{items.user.location}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-[#4CAF50]" />
                    <span className="text-sm">
                      {items.user.firstName} {items.user.lastName}
                    </span>
                  </div>
                  <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
                    Accept Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
