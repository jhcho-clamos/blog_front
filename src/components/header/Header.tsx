"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import Text from "@/components/styled/global/Text";
import { useRecoilValue } from "recoil";
import { loginSelector } from "@/recoil/login";

const Header = () => {
  const getLoginState = useRecoilValue(loginSelector);
  return (
    <Box
      position="absolute"
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
          >
            <Menu />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">dev_blog</Link>
          </Box>
          {getLoginState ? (
            <Box>
              <Text>{getLoginState.name || ""}</Text>
            </Box>
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
  );
};
export default Header;
