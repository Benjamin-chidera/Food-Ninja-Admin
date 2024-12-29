"use client";

import React, { useState } from "react";
import { Save, AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";



const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "FoodExpress",
    siteDescription: "Your favorite food, delivered fast",
    contactEmail: "support@foodexpress.com",
    orderConfirmationEmail: true,
    maintenanceMode: false,
  });

  const [deliverySettings, setDeliverySettings] = useState({
    defaultDeliveryRadius: "10",
    minimumOrderAmount: "10",
    deliveryFee: "2.99",
    freeDeliveryThreshold: "30",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    notificationFrequency: "realtime",
  });

  const handleGeneralSettingsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDeliverySettingsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setDeliverySettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationSettingsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    setNotificationSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleNotificationFrequencyChange = (value: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      notificationFrequency: value,
    }));
  };

  const handleSaveSettings = () => {
    // Here you would typically send the settings to your backend
    console.log("Saving settings:", {
      generalSettings,
      deliverySettings,
      notificationSettings,
    });
    toast({
      title: "Settings saved",
      description: "Your changes have been successfully saved.",
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50]">
            Admin Settings
          </CardTitle>
          <CardDescription>
            Manage your application-wide settings here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      name="siteName"
                      value={generalSettings.siteName}
                      onChange={handleGeneralSettingsChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Input
                      id="siteDescription"
                      name="siteDescription"
                      value={generalSettings.siteDescription}
                      onChange={handleGeneralSettingsChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={generalSettings.contactEmail}
                    onChange={handleGeneralSettingsChange}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="orderConfirmationEmail"
                    name="orderConfirmationEmail"
                    checked={generalSettings.orderConfirmationEmail}
                    onCheckedChange={(checked) =>
                      setGeneralSettings((prev) => ({
                        ...prev,
                        orderConfirmationEmail: checked,
                      }))
                    }
                  />
                  <Label htmlFor="orderConfirmationEmail">
                    Send order confirmation emails
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="maintenanceMode"
                    name="maintenanceMode"
                    checked={generalSettings.maintenanceMode}
                    onCheckedChange={(checked) =>
                      setGeneralSettings((prev) => ({
                        ...prev,
                        maintenanceMode: checked,
                      }))
                    }
                  />
                  <Label htmlFor="maintenanceMode">
                    Enable maintenance mode
                  </Label>
                </div>
                {generalSettings.maintenanceMode && (
                  <div
                    className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4"
                    role="alert"
                  >
                    <div className="flex">
                      <div className="py-1">
                        <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4" />
                      </div>
                      <div>
                        <p className="font-bold">Warning</p>
                        <p>
                          Maintenance mode is currently enabled. The site will
                          be inaccessible to regular users.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="delivery">
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="defaultDeliveryRadius">
                      Default Delivery Radius (km)
                    </Label>
                    <Input
                      id="defaultDeliveryRadius"
                      name="defaultDeliveryRadius"
                      type="number"
                      value={deliverySettings.defaultDeliveryRadius}
                      onChange={handleDeliverySettingsChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="minimumOrderAmount">
                      Minimum Order Amount ($)
                    </Label>
                    <Input
                      id="minimumOrderAmount"
                      name="minimumOrderAmount"
                      type="number"
                      value={deliverySettings.minimumOrderAmount}
                      onChange={handleDeliverySettingsChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deliveryFee">Delivery Fee ($)</Label>
                    <Input
                      id="deliveryFee"
                      name="deliveryFee"
                      type="number"
                      step="0.01"
                      value={deliverySettings.deliveryFee}
                      onChange={handleDeliverySettingsChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="freeDeliveryThreshold">
                      Free Delivery Threshold ($)
                    </Label>
                    <Input
                      id="freeDeliveryThreshold"
                      name="freeDeliveryThreshold"
                      type="number"
                      value={deliverySettings.freeDeliveryThreshold}
                      onChange={handleDeliverySettingsChange}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div className="space-y-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="emailNotifications"
                    name="emailNotifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({
                        ...prev,
                        emailNotifications: checked,
                      }))
                    }
                  />
                  <Label htmlFor="emailNotifications">
                    Enable email notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="pushNotifications"
                    name="pushNotifications"
                    checked={notificationSettings.pushNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({
                        ...prev,
                        pushNotifications: checked,
                      }))
                    }
                  />
                  <Label htmlFor="pushNotifications">
                    Enable push notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="smsNotifications"
                    name="smsNotifications"
                    checked={notificationSettings.smsNotifications}
                    onCheckedChange={(checked) =>
                      setNotificationSettings((prev) => ({
                        ...prev,
                        smsNotifications: checked,
                      }))
                    }
                  />
                  <Label htmlFor="smsNotifications">
                    Enable SMS notifications
                  </Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notificationFrequency">
                    Notification Frequency
                  </Label>
                  <Select
                    value={notificationSettings.notificationFrequency}
                    onValueChange={handleNotificationFrequencyChange}
                  >
                    <SelectTrigger id="notificationFrequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSaveSettings}
            className="bg-[#4CAF50] hover:bg-[#45a049]"
          >
            <Save className="mr-2 h-4 w-4" /> Save Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Settings;
