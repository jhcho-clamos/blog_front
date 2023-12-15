"use client";
import Styles from "@/css/login.module.css";
import Input from "@/components/styled/global/Input";
import useInput from "@/hooks/useInput";
import Text from "@/components/styled/global/Text";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import { Divider, Grid } from "@mui/material";
import theme from "@/setting/theme";
import Box from "@mui/material/Box";
import CustomButton from "@/components/styled/global/CustomButton";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import apiGroup from "@/config/apiGroup";
import { useSetRecoilState } from "recoil";
import { loginSelector } from "@/recoil/login";
import { useRouter } from "next/navigation";
import BadgeIcon from "@mui/icons-material/Badge";

interface LoginProps {
  type: "Login" | "Signup";
}

const Login = ({ type }: LoginProps) => {
  const idInput = useInput("");
  const pwInput = useInput("");
  const nameInput = useInput("");
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const setLoginState = useSetRecoilState(loginSelector);
  const router = useRouter();
  const enterArray: string[] = ["enter", "numpadenter"];

  useEffect(() => {
    if (idRef.current) {
      idRef.current.focus();
    }
  }, [idRef]);

  const isInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return enterArray.indexOf(e.code?.toLowerCase()) > -1;
  };

  const pwNextFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isInputEnter(e)) {
      return pwRef.current && pwRef.current.focus();
    }
  };

  const pwEnterAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isInputEnter(e)) {
      return loginAction();
    }
  };

  const nameNextFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isInputEnter(e)) {
      return nameRef.current && nameRef.current.focus();
    }
  };

  const nameEnterActon = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isInputEnter(e)) {
      return signupAction();
    }
  };

  const loginAction = async () => {
    try {
      const request = await apiGroup.authApi.login({
        id: idInput.value,
        password: pwInput.value,
      });
      if (!request) {
        return toast.error("login fail");
      }
      setLoginState({
        id: request.id,
        name: request.name,
        createDate: request.createDate,
        isLogin: true,
      });
      router.push("/");
    } catch (e) {
      return toast.error("login fail");
    }
  };

  const signupAction = async () => {
    try {
      const request = await apiGroup.authApi.signup({
        id: idInput.value,
        password: pwInput.value,
        name: nameInput.value,
      });
      if (!request) {
        return toast.error("signup fail");
      }
      setLoginState({
        id: request.id,
        name: request.name,
        createDate: request.createDate,
        isLogin: true,
      });
      router.push("/");
    } catch (e) {
      return toast.error("signup fail");
    }
  };

  return (
    <div className={Styles.login_from}>
      <div className="flex flex-grow flex-col h-full">
        <Box className="flex flex-col">
          <Box className="w-min float-left">
            <Text
              color="black"
              size="2rem"
              style={{ padding: "0 1.5rem 1rem 0" }}
            >
              {type}
            </Text>
            <Divider
              sx={{
                backgroundColor: theme.blue.base,
                height: "0.15rem",
              }}
            />
          </Box>

          <Input
            parentStyle={{ margin: "2rem 0" }}
            icon={
              <PersonIcon
                sx={{ color: "black", width: "1.7rem", height: "1.7rem" }}
              />
            }
            placeholder={"id"}
            {...idInput}
            className="w-full"
            title="id"
            ref={idRef}
            onKeyDown={pwNextFocus}
          />

          <Input
            icon={
              <VpnKeyRoundedIcon
                sx={{ color: "black", width: "1.7rem", height: "1.7rem" }}
              />
            }
            placeholder={"password"}
            {...pwInput}
            className="w-full"
            title="password"
            password={true}
            ref={pwRef}
            onKeyDown={type == "Login" ? pwEnterAction : nameNextFocus}
          />

          {type == "Signup" && (
            <Input
              parentStyle={{ margin: "2rem 0" }}
              icon={
                <BadgeIcon
                  sx={{ color: "black", width: "1.6rem", height: "1.6rem" }}
                />
              }
              placeholder={"name"}
              {...nameInput}
              className="w-full"
              title="name"
              ref={nameRef}
              onKeyDown={nameEnterActon}
            />
          )}
        </Box>

        {type == "Login" && (
          <Box className="mt-5">
            <Link href="/signup">
              <Text size="1.2rem" color={theme.blue.base}>
                Signup
              </Text>
            </Link>
          </Box>
        )}

        <Box flexGrow={1} className="flex items-end justify-center">
          <CustomButton
            bgColor={theme.blue.base}
            hoverColor={theme.blue.hover}
            onClick={loginAction}
          >
            {type}
          </CustomButton>
        </Box>
      </div>
    </div>
  );
};
export default Login;
