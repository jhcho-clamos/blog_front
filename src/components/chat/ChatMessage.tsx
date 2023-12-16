"use client";

import Box from "@mui/material/Box";
import theme from "@/setting/theme";
import Text from "@/components/styled/global/Text";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { ChatMessageProps } from "@/type/chat";
import { useRecoilValue } from "recoil";
import { loginSelector } from "@/recoil/login";
import Input from "@/components/styled/global/Input";
import Stomp from "stompjs";

interface ChatMessagesProps {
  postMessage: Function;
  setType: (e: "ENTER" | "TALK") => void;
  value: any;
  onChange: (e: any) => void;
  setValue: Function;
  currentMessage: any;
  roomInfo?: any;
}

const ChatMessage = (props: ChatMessagesProps) => {
  const [messageArray, setMessageArray] = useState<ChatMessageProps[]>([]);
  const [mount, setMount] = useState<boolean>(false);
  const userInfo = useRecoilValue(loginSelector);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (props.currentMessage) {
      setMessageArray([...messageArray, props.currentMessage]);

      scrollToBottom();
    }
  }, [props.currentMessage]);

  const scrollToBottom = () => {
    const scrollDoc = document.getElementById("chatMessageLine") as HTMLElement;
    if (scrollDoc) {
      setTimeout(() => {
        scrollDoc.scroll({
          top: scrollDoc.scrollHeight - scrollDoc.clientHeight,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  useEffect(() => {
    if (mount) {
      props.postMessage();
      props.setType("TALK");
    }
  }, [mount]);

  const postMessageEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      props.postMessage();
      props.setValue("");
    }
  };

  if (!mount) return null;
  return (
    <>
      <Box
        className="flex justify-center items-center"
        sx={{
          backgroundColor: theme.blue.base,
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
          display: "flex",
          height: "50px",
        }}
      >
        <Text size="1.3rem" style={{ margin: "0 0.5rem" }}>
          {props?.roomInfo?.roomName}
        </Text>
      </Box>
      <Box
        sx={{
          padding: "1rem 1rem",
          height: "360px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          id="chatMessageLine"
          sx={{
            overflow: "auto",
            padding: "1rem 0",
            boxSizing: "border-box",
            height: "inherit",
          }}
        >
          {messageArray != null &&
            messageArray?.map((r, index: number) => {
              if (r.type == "ENTER") {
                return (
                  <Box
                    key={`user-message-index${index}`}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "0.5rem",
                      paddingBottom: "0.5rem",
                      borderBottom: `1px solid ${theme.blue.base}`,
                    }}
                  >
                    <Text color="black">안내: {r.message}</Text>
                  </Box>
                );
              } else {
                return (
                  <Box
                    key={`user-message-index${index}`}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                      justifyContent:
                        userInfo?.name == r.sender ? "end" : "start",
                    }}
                  >
                    <Text color="black">{r.sender}: </Text>
                    <Box
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: theme.blue.base,
                        padding: "0.2rem 1rem",
                        marginLeft: "0.7rem",
                      }}
                    >
                      <Text>{r.message}</Text>
                    </Box>
                    <Text>{r.updateTime}</Text>
                  </Box>
                );
              }
            })}
        </Box>
      </Box>
      <Box sx={{ marginTop: "0.8rem" }}>
        <Input
          onKeyDown={postMessageEvent}
          onChange={props.onChange}
          value={props.value}
          style={{
            border: "1px solid gray",
            padding: "0.7rem 1rem",
            width: "90%",
          }}
        />
      </Box>
    </>
  );
};
export default ChatMessage;
