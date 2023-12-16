"use client";

import Box from "@mui/material/Box";
import theme from "@/setting/theme";
import Text from "@/components/styled/global/Text";
import apiGroup from "@/config/apiGroup";
import React, { useEffect, useRef, useState } from "react";
import { ChatProps_Get } from "@/type/chat";
import dayjs from "dayjs";
import useInput from "@/hooks/useInput";
import Input from "@/components/styled/global/Input";
import toast from "react-hot-toast";
import { enterArray } from "@/util/util";
import CloseIcon from "@mui/icons-material/Close";

interface ChatListProps {
  setRoom: (e: any) => void;
}

const ChatList = (props: ChatListProps) => {
  const [data, setData] = useState<ChatProps_Get[]>([]);
  const needPwStatus = useInput(false);
  const clickedRoomInfo = useInput("");
  const pwInput = useInput("");
  const [mount, setMount] = useState<boolean>(false);
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (mount) {
      getData();
    }
  }, [mount]);

  const clickRoomAccess = (roomInfo: ChatProps_Get) => {
    if (!roomInfo.pwStatus) {
      props?.setRoom(roomInfo);
    } else {
      needPwStatus.setValue(true);
      clickedRoomInfo.setValue(roomInfo);
      setTimeout(() => {
        pwRef.current && pwRef.current.focus();
      }, 500);
    }
  };

  const enterAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (enterArray.indexOf(e.key.toLowerCase()) > -1) {
      roomAccessAction();
    }
  };

  const roomAccessAction = async () => {
    if (!clickedRoomInfo.value) return toast.error("방 선택 오류입니다.");

    const accessData = await apiGroup.chatApi.access({
      roomId: clickedRoomInfo.value.roomId,
      password: pwInput.value,
    });
    if (accessData == "fail") {
      return toast.error("비밀번호가 일치하지 않습니다.");
    } else {
      props?.setRoom(clickedRoomInfo.value);
    }
  };

  const getData = async () => {
    const result = await apiGroup.chatApi.list();
    if (!result) return null;
    setData(result);
  };

  const pwExit = () => {
    pwInput.setValue("");
    needPwStatus.setValue("");
    clickedRoomInfo.setValue("");
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
          {data?.map((r, index: number) => (
            <Box
              key={`chatlist-index${index}`}
              onClick={() => clickRoomAccess(r)}
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
                {"만든이: " + r.makeUser} _
                {dayjs(r.createDate).format("YYYY/MM/DD")}
              </Text>
            </Box>
          ))}
        </Box>
        {needPwStatus.value && (
          <Box
            className="flex justify-center flex-col absolute h-full w-full"
            sx={{ top: 0 }}
          >
            <Box
              className="flex justify-center self-center items-center flex-col relative"
              sx={{
                backgroundColor: theme.blue.base,
                padding: "0.5rem",
                borderRadius: "0.5rem",
              }}
            >
              <Box className="flex justify-end w-full">
                <CloseIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => pwExit()}
                />
              </Box>
              <Text style={{ marginBottom: "1rem" }}>
                입장하려면 비밀번호가 필요합니다
              </Text>
              <Input
                {...pwInput}
                onKeyDown={enterAction}
                password={true}
                ref={pwRef}
              />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ChatList;
