"use client";

import React, { useState } from "react";
import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock data for notifications
const mockNotifications = [
  {
    id: 1,
    type: "alert",
    message: "New user registration spike detected",
    timestamp: "2023-06-25 10:30:00",
    read: false,
  },
  {
    id: 2,
    type: "info",
    message: "System maintenance scheduled for tonight",
    timestamp: "2023-06-25 09:15:00",
    read: true,
  },
  {
    id: 3,
    type: "success",
    message: "Daily backup completed successfully",
    timestamp: "2023-06-24 23:00:00",
    read: true,
  },
  {
    id: 4,
    type: "alert",
    message: "Multiple failed login attempts detected",
    timestamp: "2023-06-24 18:45:00",
    read: false,
  },
  {
    id: 5,
    type: "info",
    message: "New restaurant onboarding request",
    timestamp: "2023-06-24 14:20:00",
    read: false,
  },
  {
    id: 6,
    type: "success",
    message: "Monthly financial report generated",
    timestamp: "2023-06-24 09:00:00",
    read: true,
  },
  {
    id: 7,
    type: "alert",
    message: "High traffic alert: Server load increasing",
    timestamp: "2023-06-23 20:10:00",
    read: false,
  },
  {
    id: 8,
    type: "info",
    message: "New feature rollout: In-app chat support",
    timestamp: "2023-06-23 16:30:00",
    read: true,
  },
  {
    id: 9,
    type: "success",
    message: "Customer satisfaction survey completed",
    timestamp: "2023-06-23 11:45:00",
    read: true,
  },
  {
    id: 10,
    type: "alert",
    message: "Payment gateway temporary outage reported",
    timestamp: "2023-06-22 22:15:00",
    read: false,
  },
];

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredNotifications = notifications.filter(
    (notification) =>
      notification.message.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (typeFilter === "All" || notification.type === typeFilter)
  );

  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotifications = filteredNotifications.slice(
    startIndex,
    endIndex
  );

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50] flex items-center">
            <Bell className="mr-2 h-6 w-6" />
            Admin Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search notifications"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Types</SelectItem>
                <SelectItem value="alert">Alerts</SelectItem>
                <SelectItem value="info">Information</SelectItem>
                <SelectItem value="success">Success</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {currentNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start p-4 rounded-lg ${
                  notification.read ? "bg-white" : "bg-blue-50"
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-grow">
                  <p
                    className={`text-sm ${
                      notification.read
                        ? "text-gray-600"
                        : "text-gray-900 font-semibold"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.timestamp}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          disabled={notification.read}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Mark as read</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete notification</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, filteredNotifications.length)} of{" "}
              {filteredNotifications.length} notifications
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

export default AdminNotifications;
