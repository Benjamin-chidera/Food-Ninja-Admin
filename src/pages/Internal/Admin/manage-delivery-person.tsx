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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Search,
  UserPlus,
} from "lucide-react";
import axios from "axios";
import { DeliveryPersonEdit } from "@/components/admin-page/delivery-person-edit";
import { useDeliveryStore } from "@/store/admin-stroe/delivery";
import { AddNewDeliveryPerson } from "@/components/admin-page/add-new-delivery-person";

const ManageDeliveryPerson = () => {
  const url = import.meta.env.VITE_API_URL;
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const itemsPerPage = 5;
  const {
    deliveryPerson,
    setDeliveryPerson,
    loading: deliveryLoading,
    setLoading: setDeliveryLoading,
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setStatus,
    setOpen,
    setDeliveryId,
  } = useDeliveryStore();

  // get delivery person
  const getDeliveryPerson = async () => {
    try {
      const { data } = await axios(`${url}/admin/get-all-delivery-person`);
      setDeliveryPerson(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDeliveryPerson();
  }, []);
  // get delivery person

  const filteredPersonnel = deliveryPerson?.filter(
    (person) =>
      (person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || person.status === statusFilter)
  );

  const totalPages = Math.ceil(filteredPersonnel.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPersonnel = filteredPersonnel.slice(startIndex, endIndex);

  const handleEdit = async (id: string) => {
    // console.log(`Edit delivery person with id: ${id}`);
    // setDeliveryLoading(true);
    setOpen(true);

    try {
      const { data } = await axios(`${url}/admin/get-delivery-person/${id}`);
      console.log(data);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
      setStatus(data.status);
      setDeliveryId(id);

      // setDeliveryLoading(false);
      setOpen(true);
    } catch (error) {
      console.log(error);
      // setDeliveryLoading(false);
      setOpen(false);
    }

    // Implement edit functionality
  };

  const handleDelete = (id: string) => {
    console.log(`Delete delivery person with id: ${id}`);
    // Implement delete functionality
  };

  // const handleAddDeliveryPerson = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Add new delivery person:", newDeliveryPerson);
  //   // Implement add functionality
  //   setIsAddDialogOpen(false);
  //   setNewDeliveryPerson({ name: "", email: "", phone: "", status: "Active" });
  // };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <DeliveryPersonEdit />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#4CAF50]">
            Manage Delivery Personnel
          </CardTitle>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#4CAF50] hover:bg-[#45a049]">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Delivery Person
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Delivery Person</DialogTitle>
                <DialogDescription>
                  Enter the details of the new delivery person here. Click save
                  when you're done.
                </DialogDescription>
              </DialogHeader>
              <AddNewDeliveryPerson />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search delivery personnel"
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
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPersonnel.map((person) => (
                <TableRow key={person._id}>
                  <TableCell className="font-medium">
                    {person.firstName} {person.lastName}
                  </TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell>{person.phoneNumber || "090"}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        person.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {person.status}
                    </span>
                  </TableCell>
                  <TableCell>{person.rating}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(person._id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(person._id)}
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
              {Math.min(endIndex, filteredPersonnel.length)} of{" "}
              {filteredPersonnel.length} delivery personnel
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

export default ManageDeliveryPerson;
