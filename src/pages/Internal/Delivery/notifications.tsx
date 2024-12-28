'use client'

import { CheckCircle, Package, DollarSign, Settings, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react'

type Notification = {
  id: string
  type: 'order' | 'earnings' | 'system'
  title: string
  message: string
  timestamp: string
  read: boolean
}

const mockNotifications: Notification[] = [
  { id: '1', type: 'order', title: 'New Order Available', message: 'A new order is available for pickup in your area.', timestamp: '2 minutes ago', read: false },
  { id: '2', type: 'earnings', title: 'Weekly Earnings Update', message: 'Your earnings for last week have been calculated. Tap to view details.', timestamp: '1 hour ago', read: false },
  { id: '3', type: 'system', title: 'App Update Available', message: 'A new version of the FoodExpress app is available. Please update to ensure optimal performance.', timestamp: '1 day ago', read: true },
  { id: '4', type: 'order', title: 'Order Cancelled', message: 'The order #1234 has been cancelled by the customer.', timestamp: '2 days ago', read: true },
  { id: '5', type: 'earnings', title: 'Bonus Achieved!', message: 'Congratulations! You\'ve earned a $20 bonus for completing 10 deliveries today.', timestamp: '3 days ago', read: true },
]

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all')

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })))
  }

  const deleteAllNotifications = () => {
    setNotifications([])
  }

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(notif => !notif.read)

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'order':
        return <Package className="h-4 w-4" />
      case 'earnings':
        return <DollarSign className="h-4 w-4" />
      case 'system':
        return <Settings className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold text-[#4CAF50]">Notifications</CardTitle>
              <CardDescription>Stay updated with your latest activities</CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={markAllAsRead}>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span>Mark all as read</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={deleteAllNotifications}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete all notifications</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setActiveTab(value as 'all' | 'unread')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notif) => (
                    <div key={notif.id} className="mb-4 last:mb-0">
                      <NotificationItem notification={notif} onMarkAsRead={markAsRead} onDelete={deleteNotification} />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No notifications to display.</p>
                )}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="unread">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notif) => (
                    <div key={notif.id} className="mb-4 last:mb-0">
                      <NotificationItem notification={notif} onMarkAsRead={markAsRead} onDelete={deleteNotification} />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No unread notifications.</p>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Switch id="push-notifications" />
            <label htmlFor="push-notifications" className="text-sm text-gray-700">Enable push notifications</label>
          </div>
          <Button variant="outline" onClick={markAllAsRead}>Mark all as read</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function NotificationItem({ notification, onMarkAsRead, onDelete }: { 
  notification: Notification, 
  onMarkAsRead: (id: string) => void, 
  onDelete: (id: string) => void 
}) {
  return (
    <div className={`p-4 rounded-lg ${notification.read ? 'bg-gray-50' : 'bg-white border-l-4 border-[#4CAF50]'}`}>
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-full ${
            notification.type === 'order' ? 'bg-blue-100 text-blue-600' :
            notification.type === 'earnings' ? 'bg-green-100 text-green-600' :
            'bg-yellow-100 text-yellow-600'
          }`}>
            {getIcon(notification.type)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
            <p className="text-sm text-gray-600">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {!notification.read && (
            <Button variant="ghost" size="sm" onClick={() => onMarkAsRead(notification.id)}>
              <CheckCircle className="h-4 w-4" />
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={() => onDelete(notification.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function getIcon(type: Notification['type']) {
  switch (type) {
    case 'order':
      return <Package className="h-4 w-4" />
    case 'earnings':
      return <DollarSign className="h-4 w-4" />
    case 'system':
      return <Settings className="h-4 w-4" />
  }
}

