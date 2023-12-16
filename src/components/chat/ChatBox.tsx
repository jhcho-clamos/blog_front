"use client";

import Box from "@mui/material/Box";
import Text from "@/components/styled/global/Text";
import theme from "@/setting/theme";
import { useEffect, useRef, useState } from "react";
import { ChatMessageProps } from "@/type/chat";
import useInput from "@/hooks/useInput";
import ChatList from "@/components/chat/ChatList";
import ChatMessage from "@/components/chat/ChatMessage";
import sockJs from "sockjs-client";
import config from "@/config/config";
import { useRecoilValue } from "recoil";
import { loginSelector } from "@/recoil/login";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import toast from "react-hot-toast";

interface ChatBoxProps {
  onChat?: boolean;
}

const type = {
  ENTER: "ENTER",
  TALK: "TALK",
};

const ChatBox = (props: ChatBoxProps) => {
  const typeInput = useInput(type.ENTER);
  const messageInput = useInput("");
  const roomInfo = useInput(null);
  const userInfo = useRecoilValue(loginSelector);
  const [currentMessage, setCurrentMessage] = useState<any>("");
  const [client, setClient] = useState<Stomp.Client>();

  useEffect(() => {
    if (!roomInfo.value.roomId) return;
    connectHandler();
    // 메시지 전송
  }, [roomInfo.value?.roomId]);

  const connectHandler = () => {
    const socket = new sockJs(`${config.BASE_URL}/ws/chat`, null, {
      transports: ["websocket", "xhr-streaming", "xhr-polling"],
    });
    setClient(Stomp.over(socket));
  };

  useEffect(() => {
    client?.connect({}, (frame) => {
      client?.subscribe(
        `/sub/chat/${roomInfo.value.roomId}`,
        (message: Stomp.Message) => {
          setCurrentMessage(JSON.parse(message.body));
        },
      );
      const msg = {
        roomId: roomInfo.value?.roomId,
        roomName: roomInfo.value?.roomName,
        sender: userInfo?.name,
        type: typeInput.value,
        message: messageInput.value,
      };

      client?.send(
        `/pub/chat/${roomInfo.value.roomId}`,
        {},
        JSON.stringify(msg),
      );
    });
  }, [client]);

  const postMessage = () => {
    if (
      messageInput.value.replace(/\s/g, "") == "" &&
      typeInput.value == "TALK"
    ) {
      return toast.error("메시지를 입력 해 주세요.");
    }
    const msg = {
      roomId: roomInfo.value?.roomId,
      roomName: roomInfo.value?.roomName,
      sender: userInfo?.name,
      type: typeInput.value,
      message: messageInput.value,
    };
    if (client) {
      if (!client.connected) {
        client.connect({}, (frame: any) => {
          client?.send(
            `/pub/chat/${roomInfo.value.roomId}`,
            {},
            JSON.stringify(msg),
          );
        });
      } else {
        client?.send(
          `/pub/chat/${roomInfo.value.roomId}`,
          {},
          JSON.stringify(msg),
        );
      }
    }
  };

  return (
    <Box
      className="bg-white"
      sx={{
        width: "400px",
        height: "500px",
        marginBottom: "1.3rem",
        borderRadius: "10px",
      }}
    >
      {roomInfo.value != "" ? (
        <ChatMessage
          roomInfo={roomInfo.value}
          postMessage={postMessage}
          setType={typeInput.setValue}
          currentMessage={currentMessage}
          {...messageInput}
        />
      ) : (
        <ChatList setRoom={roomInfo.setValue} />
      )}
    </Box>
  );
};

export default ChatBox;
