"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import Link from "next/link";

const Header = () => {
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            <Link href="/">dev_blog</Link>
          </Typography>
          <Button color="inherit" variant="text">
            <Link href="/signup">signup</Link>
          </Button>
          <Button color="inherit" variant="text">
            <Link href="/login">login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
