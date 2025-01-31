"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import axios from "axios";
import { useOrderStore } from "@/store/admin-stroe/orders";
import { format } from "timeago.js";

const ManageOrder = () => {
  const { order, setOrder } = useOrderStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  // console.log(order);

  const filteredOrders = order.filter(
    (order) =>
      (order?.user?.firstName
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase()) ||
        order?.orderId?.includes(searchTerm)) &&
      (statusFilter === "All" || order.status === statusFilter)
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-200 text-green-800";
      case "In Transit":
        return "bg-blue-200 text-blue-800";
      case "Preparing":
        return "bg-yellow-200 text-yellow-800";
      case "Placed":
        return "bg-purple-200 text-purple-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50]">
            Manage Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search orders"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Statuses</SelectItem>
                <SelectItem value="Placed">Placed</SelectItem>
                <SelectItem value="Preparing">Preparing</SelectItem>
                <SelectItem value="In Transit">In Transit</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Restaurant</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentOrders?.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium">{item._id}</TableCell>
                  <TableCell className=" capitalize">
                    {item.user.firstName} {item.user.lastName}
                  </TableCell>
                  {item.item?.map((items) => (
                    <TableCell className=" capitalize" key={item._id}>
                      {items.restaurant}
                    </TableCell>
                  ))}

                  <TableCell key={item._id}>
                    ${item.totalAmount.toFixed(2)}
                  </TableCell>

                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status || "Preparing"}
                    </span>
                  </TableCell>
                  <TableCell>{format(item.createdAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredOrders.length)} of{" "}
              {filteredOrders.length} orders
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageOrder;
