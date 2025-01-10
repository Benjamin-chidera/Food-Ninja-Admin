/* eslint-disable react-hooks/exhaustive-deps */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
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

export const EditFood = () => {
  const {
    isEditing,
    setIsEditing,
    editingFoodId,
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    // image,
    setImage,
    category,
    setCategory,
    tags,
    setTags,
    isAvailable,
    setIsAvailable,
    restaurant,
    setRestaurant,
    foodDetails,
    setFoodDetails,
  } = useFoodStore();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getFoodId = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3000/api/v1/food-ninja/food/food/${editingFoodId}`
        );
        console.log(data.food);
        setFoodDetails(data.food);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getFoodId();
  }, [editingFoodId]);

  useEffect(() => {
    if (foodDetails) {
      setName(foodDetails?.name);
      setPrice(foodDetails?.price);
      setDescription(foodDetails?.description);
      setImage(foodDetails?.image);
      setCategory(foodDetails?.category);
      setTags(foodDetails?.tags);
      setIsAvailable(foodDetails?.isAvailable);
      setRestaurant(foodDetails?.restaurant);
    }
  }, [editingFoodId]);

  return (
    <div>
      <AlertDialog open={isEditing} onOpenChange={setIsEditing}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
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
                  <form className="space-y-6">
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
                          type="text"
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
                            <SelectItem value="burger-king">
                              Burger King
                            </SelectItem>
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
                        // onChange={handleFileChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Tags</Label>
                      <div className="flex space-x-2">
                        <Input
                          //   value={currentTag}
                          //   onChange={(e) => setCurrentTag(e.target.value)}
                          placeholder="Enter a tag"
                        />
                        <Button
                          type="button"
                          //   onClick={addTag}
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
                              //   onClick={() => removeTag(tag)}
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
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
