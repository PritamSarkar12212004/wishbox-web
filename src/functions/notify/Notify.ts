import { toast } from "react-toastify";

type MessageType = "success" | "error" | "warning" | "info";

const Notify = ({ message, type }: { type: MessageType; message: string }) => {
  toast[type](message);
};
export default Notify;
