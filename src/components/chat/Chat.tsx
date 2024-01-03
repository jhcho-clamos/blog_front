"use client";

import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import theme from "@/setting/theme";
import { useState } from "react";
import ChatBox from "@/components/chat/ChatBox";

const Chat = () => {
  const [onChat, setOnChat] = useState<boolean>(false);

  return (
    <Box position="absolute" sx={{ bottom: "2rem", right: "2rem" }}>
      <Box position="relative">
        {onChat && <ChatBox />}
        <Box
          className="flex justify-center items-end cursor-pointer w-full float-right"
          sx={{
            borderRadius: "100%",
            backgroundColor: theme.blue.base,
            padding: ".7rem",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <SendIcon
            sx={{ width: "1.9rem", height: "1.9rem" }}
            onClick={() => setOnChat(!onChat)}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Chat;
