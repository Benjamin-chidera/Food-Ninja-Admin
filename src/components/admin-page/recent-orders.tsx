import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderPropsTypes } from "@/store/admin-stroe/orders";

interface OrderProps {
  order: OrderPropsTypes[];
}

export const RecentOrders = ({ order }: OrderProps) => {
  return (
    <div>
      {" "}
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
              {order?.map((order) => (
                <TableRow key={order._id}>
                  <TableCell className="font-medium">{order?._id}</TableCell>
                  <TableCell>
                    {order?.user?.firstName} {order?.user?.lastName}
                  </TableCell>
                  {order?.item?.map((item) => (
                    <TableCell className=" capitalize" key={item?._id}>
                      {item?.restaurant}
                    </TableCell>
                  ))}
                  <TableCell>{order?.status}</TableCell>
                  <TableCell>{order?.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
