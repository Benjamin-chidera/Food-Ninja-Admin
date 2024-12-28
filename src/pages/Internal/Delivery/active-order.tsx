'use client'

import { useState } from 'react'
import { Phone, MessageSquare, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from '@/components/ui/progress'

const orderStatuses = ['Picked Up', 'On the Way', 'Arrived', 'Delivered']

export default function ActiveOrder() {
  const [orderStatus, setOrderStatus] = useState('Picked Up')
  const [isIssueDialogOpen, setIsIssueDialogOpen] = useState(false)
  const [selectedIssue, setSelectedIssue] = useState('')
  const [issueDescription, setIssueDescription] = useState('')

  const handleStatusUpdate = (newStatus: string) => {
    setOrderStatus(newStatus)
    // Here you would typically update the backend with the new status
  }

  const handleIssueSubmit = () => {
    // Here you would typically send the issue to the backend
    console.log('Issue submitted:', { type: selectedIssue, description: issueDescription })
    setIsIssueDialogOpen(false)
    setSelectedIssue('')
    setIssueDescription('')
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50]">Active Order #1234</CardTitle>
          <CardDescription>Estimated delivery time: 25 minutes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Order Status</h3>
              <p className="text-[#4CAF50] font-medium">{orderStatus}</p>
            </div>
            <Progress value={((orderStatuses.indexOf(orderStatus) + 1) / orderStatuses.length) * 100} className="w-1/2" />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Customer Details</h3>
            <p>John Doe</p>
            <p>123 Main St, Anytown, AN 12345</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Call Customer
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message Customer
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Order Details</h3>
            <ul className="list-disc list-inside">
              <li>2x Burger ($15.98)</li>
              <li>1x Fries ($2.99)</li>
              <li>1x Soda ($1.99)</li>
            </ul>
            <p className="font-semibold">Total: $20.96</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Delivery Instructions</h3>
            <p>Please leave the order at the front door. Thank you!</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Dialog open={isIssueDialogOpen} onOpenChange={setIsIssueDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report Issue
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Report an Issue</DialogTitle>
                <DialogDescription>
                  Please provide details about the issue you're experiencing with this order.
                </DialogDescription>
              </DialogHeader>
              <RadioGroup value={selectedIssue} onValueChange={setSelectedIssue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wrong-address" id="wrong-address" />
                  <Label htmlFor="wrong-address">Wrong Address</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customer-unavailable" id="customer-unavailable" />
                  <Label htmlFor="customer-unavailable">Customer Unavailable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="order-damaged" id="order-damaged" />
                  <Label htmlFor="order-damaged">Order Damaged</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
              <Textarea 
                placeholder="Describe the issue..." 
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
              />
              <DialogFooter>
                <Button onClick={handleIssueSubmit}>Submit Issue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="space-x-2">
            {orderStatuses.map((status, index) => (
              <Button
                key={status}
                variant={orderStatus === status ? "default" : "outline"}
                onClick={() => handleStatusUpdate(status)}
                disabled={orderStatuses.indexOf(orderStatus) > index}
                className={orderStatus === status ? "bg-[#4CAF50] hover:bg-[#45a049]" : ""}
              >
                {status}
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

