'use client'

import React, { useState } from 'react'
import { ClipboardList, Truck, DollarSign, Clock, MapPin, User, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for available orders
const availableOrders = [
  { id: 1, restaurant: "Burger Palace", items: 3, price: 25.50, distance: 2.3, estimatedTime: 20, address: "123 Main St, Anytown, AN 12345", customer: "John Doe" },
  { id: 2, restaurant: "Pizza Heaven", items: 2, price: 18.75, distance: 1.5, estimatedTime: 15, address: "456 Elm St, Somewhere, SW 67890", customer: "Jane Smith" },
  { id: 3, restaurant: "Sushi Express", items: 4, price: 42.00, distance: 3.1, estimatedTime: 25, address: "789 Oak Rd, Elsewhere, EL 13579", customer: "Bob Johnson" },
  { id: 4, restaurant: "Taco Town", items: 5, price: 32.25, distance: 1.8, estimatedTime: 18, address: "321 Pine Ave, Nowhere, NW 24680", customer: "Alice Brown" },
  { id: 5, restaurant: "Salad Sensation", items: 1, price: 12.99, distance: 0.7, estimatedTime: 10, address: "654 Cedar Ln, Anywhere, AW 97531", customer: "Charlie Wilson" },
]

export default function AvailableOrders() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('distance')

  const filteredOrders = availableOrders.filter(order => 
    order.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortBy === 'distance') return a.distance - b.distance
    if (sortBy === 'price') return b.price - a.price
    if (sortBy === 'estimatedTime') return a.estimatedTime - b.estimatedTime
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#4CAF50]">Available Orders</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Search by restaurant or address"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
        {sortedOrders.map((order) => (
          <Card key={order.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{order.restaurant}</span>
                <Badge variant="secondary">#{order.id}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ClipboardList className="mr-2 h-4 w-4 text-[#4CAF50]" />
                    <span>{order.items} items</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <DollarSign className="mr-1 h-4 w-4 text-[#4CAF50]" />
                    <span>{order.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Truck className="mr-2 h-4 w-4 text-[#4CAF50]" />
                    <span>{order.distance.toFixed(1)} miles</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-[#4CAF50]" />
                    <span>{order.estimatedTime} mins</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-2 h-4 w-4 text-[#4CAF50] mt-1 flex-shrink-0" />
                  <span className="text-sm">{order.address}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm">{order.customer}</span>
                </div>
                <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
                  Accept Order
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

