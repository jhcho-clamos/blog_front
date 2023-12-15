"use client";

import Box from "@mui/material/Box";
import theme from "@/setting/theme";
import Text from "@/components/styled/global/Text";
import dayjs from "dayjs";

interface ChatMessageProps {
  postMessage?: Function;
  roomInfo?: any;
}

const ChatMessage = (props: ChatMessageProps) => {
  return (
    <>
      <Box
        className="flex justify-center items-center"
        sx={{
          backgroundColor: theme.blue.base,
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
          display: "flex",
          height: "60px",
        }}
      >
        <Text size="1.3rem" style={{ margin: "0 0.5rem" }}>
          {props?.roomInfo?.roomName}
        </Text>
      </Box>
      <Box sx={{ padding: "0.5rem 0", height: "400px", position: "relative" }}>
        <Box sx={{ overflow: "auto", height: "inherit" }}></Box>
      </Box>
    </>
  );
};
export default ChatMessage;
