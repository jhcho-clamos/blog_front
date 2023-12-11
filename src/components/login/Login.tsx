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

const Login = () => {
  const idInput = useInput("");
  const pwInput = useInput("");
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
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
      return loginAction;
    }
  };

  const loginAction = () => {
    apiGroup.authApi
      .login({
        id: idInput.value,
        password: pwInput.value,
      })
      .then((r) => {
        setLoginState({
          id: r.id,
          name: r.name,
          createdate: r.createdate,
        });
      });
    router.push("/");
  };

  return (
    <div className={Styles.login_from}>
      <div className="flex flex-grow flex-col h-full">
        <Grid
          container
          spacing={3}
          className="flex flex-grow flex-col flex-grow w-full "
        >
          <Grid
            item
            sx={{
              textAlign: "left",
              width: "min-content",
            }}
          >
            <Text
              color="black"
              size="2rem"
              style={{ padding: "0 1.5rem 1rem 0" }}
            >
              Login
            </Text>
            <Divider
              sx={{
                backgroundColor: theme.blue.base,
                height: "0.15rem",
              }}
            />
          </Grid>
          <Grid item>
            <Input
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
          </Grid>
          <Grid item>
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
              onKeyDown={pwEnterAction}
            />
            <Box className="mt-5">
              <Link href="/signup">
                <Text size="1.2rem" color={theme.blue.base}>
                  Signup
                </Text>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box flexGrow={1} className="flex items-end justify-center">
          <CustomButton
            bgColor={theme.blue.base}
            hoverColor={theme.blue.hover}
            onClick={loginAction}
          >
            Login
          </CustomButton>
        </Box>
      </div>
    </div>
  );
};
export default Login;
