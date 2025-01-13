"use client";

import React, { useEffect, useState } from "react";
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
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import axios from "axios";
import { useFoodStore } from "@/store/Delivery-store/foodStore";
import { io } from "socket.io-client";
import { EditFood } from "@/components/admin-page/edit-food";

const GetFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { foods, setFoods, setIsEditing, setEditingFoodId } = useFoodStore();
  const socket = io("http://localhost:3000");

  const getFoods = async () => {
    const { data } = await axios(
      `http://localhost:3000/api/v1/food-ninja/food/all-food`
    );

    setFoods(data.foods);
  };

  useEffect(() => {
    getFoods();
  }, []);

  socket.on("food-created", (data) => {
    setFoods((prevFoods) => [...prevFoods, data.food]);
  });

  const filteredItems = foods?.filter(
    (item) =>
      item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) &&
      (categoryFilter === "All" || item?.category === categoryFilter)
  );

  const totalPages = Math.ceil(filteredItems?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems?.slice(startIndex, endIndex);

  const handleEdit = (id: string) => {
    console.log(`Edit item with id: ${id}`);
    setIsEditing(true);
    setEditingFoodId(id);
    // Implement edit functionality
  };

  const handleDelete = async (id: string) => {
    console.log(`Delete item with id: ${id}`);

    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/food-ninja/food/food/${id}`
      );

      if (data.success) {
        console.log(data);
        getFoods();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50]">
            Food Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search food items"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Restaurant</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems?.map((item) => (
                <TableRow key={item?._id}>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell className=" capitalize">
                    {item?.restaurant?.replace("-", " ")}
                  </TableCell>
                  <TableCell className=" capitalize">
                    {item?.category}
                  </TableCell>
                  <TableCell>${item?.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item?.isAvailable
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {item?.isAvailable ? "Yes" : "No"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(item?._id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(item?._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredItems?.length)} of{" "}
              {filteredItems?.length} items
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

      {/* this is for the edit food section and component */}
      <EditFood />
      {/* this is for the edit food section and component */}
    </div>
  );
};

export default GetFood;
