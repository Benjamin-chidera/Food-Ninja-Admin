'use client'

import { CalendarIcon, Package } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data for demonstration
const orders = [
  { id: 'ORD-001', date: '2023-12-20', items: 3, total: 35.99, status: 'Delivered' },
  { id: 'ORD-002', date: '2023-12-18', items: 2, total: 24.50, status: 'Delivered' },
  { id: 'ORD-003', date: '2023-12-15', items: 1, total: 12.99, status: 'Cancelled' },
  { id: 'ORD-004', date: '2023-12-10', items: 4, total: 49.99, status: 'Delivered' },
  { id: 'ORD-005', date: '2023-12-05', items: 2, total: 27.50, status: 'Delivered' },
]

const OrderHistory = () => {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50] flex items-center gap-2">
            <Package className="h-6 w-6" />
            Order History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                      {order.date}
                    </div>
                  </TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={order.status === 'Delivered' ? 'secondary' : 'destructive'}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderHistory

