"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import Text from "@/components/styled/global/Text";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { loginSelector } from "@/recoil/login";
import { useState } from "react";
import MoveHeader from "@/components/header/MoveHeader";

const Header = () => {
  const getLoginState = useRecoilValue(loginSelector);
  const resetLoginState = useResetRecoilState(loginSelector);
  const [menuState, setMenuState] = useState<boolean>(false);

  return (
    <>
      <Box
        position="relative"
        sx={{
          width: "100%",
          top: 0,
          zIndex: "10",
        }}
      >
        <AppBar
          position="relative"
          className="backdrop-blur-md"
          sx={{
            borderColor: "rgba(194, 224, 255, 0.08)",
            backgroundColor: "rgba(16, 20, 24, 0.6)",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                width: "38px",
                height: "38px",
                mr: 2,
                border: "1px solid rgb(31, 38, 46)",
                borderRadius: "12px",
              }}
              onClick={() => setMenuState(!menuState)}
            >
              <Menu />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/">dev_blog</Link>
            </Box>
            {getLoginState.isLogin ? (
              <>
                <Box sx={{ padding: "0 10px" }}>
                  <Text>{getLoginState.name || ""}</Text>
                </Box>
                <Box
                  sx={{ padding: "0 10px", cursor: "pointer" }}
                  onClick={() => resetLoginState()}
                >
                  <Text>Logout</Text>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ padding: "0 10px" }}>
                  <Link href="/signup">
                    <Text>Signup</Text>
                  </Link>
                </Box>
                <Box sx={{ padding: "0 10px" }}>
                  <Link href="/login">
                    <Text>Login</Text>
                  </Link>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <MoveHeader isVisible={menuState} isLogin={getLoginState.isLogin} />
    </>
  );
};
export default Header;
