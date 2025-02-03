import React, { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useOrderStore } from "@/store/admin-stroe/orders";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import axios from "axios";

export const AdminStatusOrderUpdate = () => {
  const { open, setOpen, orderId, setStatus, status } = useOrderStore();
  const url = import.meta.env.VITE_API_URL;

  const getOderStatus = async () => {
    try {
      const { data } = await axios(`${url}/customer/orders/${orderId}`);
      console.log(data);
      setStatus(data.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOderStatus();
  }, [orderId]);

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`${url}/customer/orders/${orderId}`, {
        status,
      });

      if (data.success) {
        console.log(data);

        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update the customer's other status</DialogTitle>
            <form className=" pt-3" onSubmit={handleUpdateStatus}>
              <Select
                value={status}
                onValueChange={(value) => setStatus(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Order Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Placed">Placed</SelectItem>
                  <SelectItem value="Preparing">Preparing</SelectItem>
                  <SelectItem value="In Transit">In Transit</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>

              <Button className="mt-3 bg-green-500 w-full">Update</Button>
            </form>
            {/* <DialogDescription></DialogDescription> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
