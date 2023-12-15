import Box from "@mui/material/Box";
import Login from "@/components/login/Login";

const LoginPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100%",
        background: "url(/assets/img/background.png) no-repeat center",
        backgroundSize: "contain",
      }}
      className="flex items-center justify-center"
    >
      <Login />
    </Box>
  );
};

export default LoginPage;
