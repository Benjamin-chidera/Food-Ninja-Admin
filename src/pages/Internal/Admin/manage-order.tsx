"use client";

import React, { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Eye, ChevronLeft, ChevronRight, Search } from "lucide-react";

// Mock data for orders
const mockOrders = [
  {
    id: "1001",
    customer: "John Doe",
    restaurant: "Joe's Diner",
    items: 3,
    total: 35.5,
    status: "Delivered",
    date: "2023-06-15",
  },
  {
    id: "1002",
    customer: "Jane Smith",
    restaurant: "Pizza Palace",
    items: 2,
    total: 22.99,
    status: "In Transit",
    date: "2023-06-15",
  },
  {
    id: "1003",
    customer: "Bob Johnson",
    restaurant: "Sushi Spot",
    items: 4,
    total: 48.75,
    status: "Preparing",
    date: "2023-06-14",
  },
  {
    id: "1004",
    customer: "Alice Brown",
    restaurant: "Burger Barn",
    items: 1,
    total: 18.5,
    status: "Delivered",
    date: "2023-06-14",
  },
  {
    id: "1005",
    customer: "Charlie Davis",
    restaurant: "Taco Town",
    items: 3,
    total: 27.25,
    status: "Placed",
    date: "2023-06-13",
  },
  {
    id: "1006",
    customer: "Eva Wilson",
    restaurant: "Pasta Place",
    items: 2,
    total: 32.0,
    status: "In Transit",
    date: "2023-06-13",
  },
  {
    id: "1007",
    customer: "Frank Miller",
    restaurant: "Salad Station",
    items: 1,
    total: 12.99,
    status: "Delivered",
    date: "2023-06-12",
  },
  {
    id: "1008",
    customer: "Grace Lee",
    restaurant: "Donut Delight",
    items: 6,
    total: 15.5,
    status: "Preparing",
    date: "2023-06-12",
  },
  {
    id: "1009",
    customer: "Henry Taylor",
    restaurant: "Smoothie Shack",
    items: 2,
    total: 9.98,
    status: "Placed",
    date: "2023-06-11",
  },
  {
    id: "1010",
    customer: "Ivy Martin",
    restaurant: "Ice Cream Island",
    items: 3,
    total: 14.25,
    status: "Delivered",
    date: "2023-06-11",
  },
];

const ManageOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<
    (typeof mockOrders)[0] | null
  >(null);
  const itemsPerPage = 5;

  const filteredOrders = mockOrders.filter(
    (order) =>
      (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.includes(searchTerm)) &&
      (statusFilter === "All" || order.status === statusFilter)
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const handleViewOrder = (order: (typeof mockOrders)[0]) => {
    setSelectedOrder(order);
  };

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
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.restaurant}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewOrder(order)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
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

      <Dialog
        open={!!selectedOrder}
        onOpenChange={() => setSelectedOrder(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              Detailed information about the selected order.
            </DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Order ID</Label>
                <div className="col-span-3">{selectedOrder.id}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Customer</Label>
                <div className="col-span-3">{selectedOrder.customer}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Restaurant</Label>
                <div className="col-span-3">{selectedOrder.restaurant}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Items</Label>
                <div className="col-span-3">{selectedOrder.items}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Total</Label>
                <div className="col-span-3">
                  ${selectedOrder.total.toFixed(2)}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Status</Label>
                <div className="col-span-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                      selectedOrder.status
                    )}`}
                  >
                    {selectedOrder.status}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Date</Label>
                <div className="col-span-3">{selectedOrder.date}</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setSelectedOrder(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageOrder;
