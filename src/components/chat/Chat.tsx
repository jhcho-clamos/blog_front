"use client";

import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import theme from "@/setting/theme";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const Chat = () => {
  const [sockets, setSockets] = useState<any | null>(null);
  useEffect(() => {
    const socket = io("http://localhost:5000", { path: "/ws" });
    socket.on("/chat/msg", (data: any) => {
      console.log(data);
    });
    socket.on("connect", async () => {
      console.log("connect");
    });
    setSockets(socket);
  }, []);

  const actions = () => {
    sockets?.emit("/chat/msg", {
      chatRoomId: "7025e2b6-15f2-4155-b10f-b8b38c4492d0",
      userId: "admin",
      userName: "관리자",
    });
  };

  return (
    <Box
      position="absolute"
      sx={{ bottom: "2rem", right: "2rem" }}
      onClick={() => actions()}
    >
      <Box
        className="flex justify-center items-center cursor-pointer"
        sx={{
          borderRadius: "100%",
          backgroundColor: theme.blue.base,
          padding: ".7rem",
        }}
      >
        <button>sadfasd</button>
        {/*<SendIcon sx={{ width: "1.9rem", height: "1.9rem" }} />*/}
      </Box>
      {/*<Box></Box>*/}
    </Box>
  );
};
export default Chat;
