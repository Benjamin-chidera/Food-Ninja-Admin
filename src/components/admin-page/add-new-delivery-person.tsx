import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useDeliveryStore } from "@/store/admin-stroe/delivery";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Save } from "lucide-react";
import axios from "axios";
import { Button } from "../ui/button";

export const AddNewDeliveryPerson = () => {
  const url = import.meta.env.VITE_API_URL;
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    status,
    setStatus,
    open,
    setOpen,
    deliveryId,
  } = useDeliveryStore();

  const handleAddNewDeliveryPerson = async () => {
    try {
      const { data } = await axios.post(`${url}/admin//add-delivery-person`, {
        firstName,
        lastName,
        email,
        phoneNumber,
        status,
      });
      console.log(data);
      if (data.success) {
        // setOpen(false);
        console.log(data);
        
      }
    } catch (error) {
      console.log(error);

      setOpen(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleAddNewDeliveryPerson} className=" relative">
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              FirstName
            </Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              LastName
            </Label>
            <Input
              id="name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select value={status} onValueChange={(value) => setStatus(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className=" text-end">
          <Button className="bg-[#4CAF50] hover:bg-[#45a049]" type="submit">
            <Save />
          </Button>
        </div>
      </form>
    </div>
  );
};
