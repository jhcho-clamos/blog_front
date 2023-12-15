import { io } from "socket.io-client";
import config from "@/config/config";

export default {
  socket: io(config.BASE_URL, { autoConnect: false, path: "/ws/chat" }),
};
