"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Loader2, Plus, X } from "lucide-react";
import { useFoodStore } from "@/store/Delivery-store/foodStore";
import axios from "axios";

const AddFood = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("");
  const {
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    image,
    setImage,
    category,
    setCategory,
    tags,
    setTags,
    isAvailable,
    setIsAvailable,
    restaurant,
    setRestaurant,
  } = useFoodStore();

  console.log(isAvailable);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Ensure file exists
    if (file) {
      setImage(file); // Update state with the selected file
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image file.");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price.toString());
      formData.append("description", description);
      formData.append("image", image); // Append the image file
      formData.append("category", category);
      formData.append("restaurant", restaurant);
      formData.append("tags", tags.join(","));
      formData.append("isAvailable", isAvailable.toString());

      const response = await axios.post(
        "http://localhost:3000/api/v1/food-ninja/food/create",
        formData
      );

      console.log(response.data);
      alert("Food item added successfully!");
      setIsLoading(false);

      // Reset form fields after successful submission
      setName("");
      setPrice(0);
      setDescription("");
      setImage(null);
      setCategory("");
      setTags([]);
      setIsAvailable(false);
    } catch (error) {
      console.error("Error adding food item:", error);
      alert("Failed to add food item. Please try again.");
      setIsLoading(false);
    }
  };

  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#4CAF50]">
            Add New Food Item
          </CardTitle>
          <CardDescription>
            Enter the details of the new food item to add to the menu.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Food Name</Label>
              <Input
                id="name"
                placeholder="Enter food name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter food description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={category}
                  onValueChange={(value) => setCategory(value)}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="restaurant">restaurant</Label>
                <Select
                  value={restaurant}
                  onValueChange={(value) => setRestaurant(value)}
                >
                  <SelectTrigger id="restaurant">
                    <SelectValue placeholder="Select restaurant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="burger-king">Burger King</SelectItem>
                    <SelectItem value="kfc">KFC</SelectItem>
                    <SelectItem value="chicken-republic">
                      Chicken Republic
                    </SelectItem>
                    <SelectItem value="sweet-sensation">
                      Sweet Sensation
                    </SelectItem>
                    <SelectItem value="tastee">Tastee</SelectItem>
                    <SelectItem value="the-place">The Place</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Food Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex space-x-2">
                <Input
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="Enter a tag"
                />
                <Button
                  type="button"
                  onClick={addTag}
                  className="bg-[#4CAF50] hover:bg-[#45a049]"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#4CAF50] text-white px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 focus:outline-none"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="available"
                checked={isAvailable}
                onCheckedChange={setIsAvailable}
              />
              <Label htmlFor="available">Available</Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding Food Item...
                </>
              ) : (
                "Add Food Item"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddFood;
