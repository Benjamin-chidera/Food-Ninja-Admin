"use client";

import React, { useEffect, useState } from "react";
import { User, Mail, Phone, MapPin, Truck, Camera, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { useDeliveryAuthStore } from "@/store/Delivery-store/authStore";

export default function Profile() {
  const url = import.meta.env.VITE_API_URL;
  const { toast } = useToast();
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    vehicleType,
    setVehicleType,
    profileImage,
    setProfileImage,
    vehicleNumber,
    setVehicleNumber,
    status,
    setStatus,
    bio,
    setBio,
  } = useDeliveryAuthStore();
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Delivery St, Foodtown, FT 12345",
    vehicleType: "car",
    bio: "Experienced delivery driver with a passion for customer service.",
    availableForWork: true,
    profileImage: "/placeholder-avatar.jpg",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({
          ...prev,
          profileImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // get delivery person details

  const getDetails = async () => {
    const token = Cookies.get("deliveryId");
    console.log(token);

    try {
      const {
        data: {
          deliveryPerson: {
            firstName,
            lastName,
            email,
            phoneNumber,
            // profileImage,
            status,
            vehicleType,
            vehicleNumber,
            address,
            bio,
          },
        },
      } = await axios(`${url}/delivery/delivery-person/${token}`);

      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setPhoneNumber(phoneNumber);
      // setProfileImage(profileImage);
      setStatus(status);
      setVehicleType(vehicleType);
      setVehicleNumber(vehicleNumber);
      setAddress(address);
      setBio(bio);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = Cookies.get("deliveryId");
      console.log(token);

      const { data } = await axios.patch(
        `${url}/delivery/delivery-person/${token}`,
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          // profileImage,
          status,
          vehicleType,
          vehicleNumber,
          address,
          bio,
        }
      );

      if (data.success) {
        console.log(data);

        toast({
          title: "Profile Updated",
          description: "Your profile has been successfully updated.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50]">
            Your Profile
          </CardTitle>
          <CardDescription>
            Manage your account details and preferences
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage
                  src={profileData.profileImage}
                  alt="Profile picture"
                />
                <AvatarFallback>
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center">
                <Input
                  id="picture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <Label htmlFor="picture" className="cursor-pointer">
                  <div className="flex items-center space-x-2 text-[#4CAF50]">
                    <Camera className="h-4 w-4" />
                    <span>Change Picture</span>
                  </div>
                </Label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <Input
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="pl-10"
                  />
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <div className="relative">
                  <Input
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="pl-10"
                  />
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div className="relative">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10"
                />
                <Phone
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="relative">
                <Textarea
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-10 pt-2"
                  rows={3}
                />
                <MapPin
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="vehicleType">Vehicle Type</Label>
              <Select
                value={vehicleType}
                onValueChange={(value) => setVehicleType(value)}
              >
                <SelectTrigger id="vehicleType" className="pl-10">
                  <SelectValue placeholder="Select your vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bicycle">Bicycle</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle</SelectItem>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                </SelectContent>
              </Select>
              <Truck
                className="absolute left-3 bottom-2 text-gray-400"
                size={18}
              />
            </div>

            {vehicleType !== "bicycle" && (
              <div className="space-y-2 relative">
                <Label htmlFor="vehicleType">Vehicle Number</Label>
                <Input
                  type="text"
                  className="pl-10"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                />
                <Truck
                  className="absolute left-3 bottom-2 text-gray-400"
                  size={18}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us a bit about yourself..."
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="available"
                checked={status}
                onCheckedChange={(vale) => setStatus(vale)}
              />
              <Label htmlFor="available">Available for work</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
            >
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
