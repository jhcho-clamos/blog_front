"use client";

import Box from "@mui/material/Box";
import theme from "@/setting/theme";
import Text from "@/components/styled/global/Text";
import apiGroup from "@/config/apiGroup";
import { useEffect, useState } from "react";
import { ChatProps_Get } from "@/type/chat";
import dayjs from "dayjs";

interface ChatListProps {
  setRoom: (e: any) => void;
}

const ChatList = (props: ChatListProps) => {
  const [data, setData] = useState<ChatProps_Get[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await apiGroup.chatApi.list();
    if (!result) return null;
    setData(result);
  };

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
          Room List
        </Text>
      </Box>
      <Box sx={{ padding: "0.5rem 0", height: "400px", position: "relative" }}>
        <Box sx={{ overflow: "auto", height: "inherit" }}>
          {data?.map((r) => (
            <Box
              onClick={() => props?.setRoom(r)}
              className="flex justify-between items-center"
              sx={{
                border: "1px solid gray",
                borderRadius: "10px",
                margin: "1rem",
                padding: "1rem",
                "&:hover": {
                  backgroundColor: "#f2f2f2",
                  cursor: "pointer",
                },
              }}
            >
              <Text color="black">{r.roomName}</Text>
              <Text style={{ float: "right" }} size="0.8rem" color="gray">
                {dayjs(r.createDate).format("YYYY/MM/DD")}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ChatList;
