import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeliveryAuthStore } from "@/store/Delivery-store/authStore";

export const ErrorModal = () => {
  const { error, setShowErrorModal, showErrorModal } = useDeliveryAuthStore();
  return (
    <main>
      <Dialog onOpenChange={setShowErrorModal} open={showErrorModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=" text-center mb-5">
              Unexpected Error
            </DialogTitle>
            <DialogDescription className=" text-center my-5">
              {error}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};
