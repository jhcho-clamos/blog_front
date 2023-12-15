"use client";

import Box from "@mui/material/Box";
import Text from "@/components/styled/global/Text";
import theme from "@/setting/theme";
import { useEffect, useState } from "react";
import { ChatMessageProps } from "@/type/chat";
import useInput from "@/hooks/useInput";
import ChatList from "@/components/chat/ChatList";
import ChatMessage from "@/components/chat/ChatMessage";
import sockJs from "sockjs-client";
import config from "@/config/config";
import { useRecoilValue } from "recoil";
import { loginSelector } from "@/recoil/login";

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
  const roomInfo = useInput("");

  const userInfo = useRecoilValue(loginSelector);

  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (!roomInfo.value.roomId) return;
    const socket = new sockJs(`${config.BASE_URL}/ws/chat`, null, {
      transports: ["websocket", "xhr-streaming", "xhr-polling"],
    });
    // 소켓 연결 시 실행되는 코드
    socket.onopen = () => {
      console.log("WebSocket 연결 성공!");
      setSocket(socket);
    };

    // 연결이 종료될 때 실행되는 코드
    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    // 컴포넌트가 언마운트되면 연결을 닫음
    return () => {
      socket.close();
    };
  }, [roomInfo.value?.roomId]);

  const postMessage = () => {
    socket &&
      socket.send(
        JSON.stringify({
          roomId: roomInfo.value?.roomId,
          roomName: roomInfo.value?.roomName,
          sender: userInfo?.name,
          type: typeInput.value,
          message: messageInput.value,
        }),
      );
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
      {roomInfo.value != "" && socket ? (
        <ChatMessage
          roomInfo={roomInfo.value}
          postMessage={postMessage}
          socket={socket}
          setType={typeInput.setValue}
          {...messageInput}
        />
      ) : (
        <ChatList setRoom={roomInfo.setValue} />
      )}
    </Box>
  );
};

export default ChatBox;
