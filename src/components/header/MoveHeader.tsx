"use client";

import { Box, Divider } from "@mui/material";
import Text from "@/components/styled/global/Text";
import { style } from "@mui/system";

interface MoveHeaderProps {
  isVisible: boolean;
  isLogin: boolean;
}

const transition = { transition: "all 1s ease" };
const MoveHeader = (props: MoveHeaderProps) => {
  return (
    <Box
      style={transition}
      sx={{
        position: "absolute",
        width: "300px",
        height: "100%",
        backgroundColor: "rgba(16, 20, 24, 0.9)",
        left: props.isVisible ? 0 : "-300px",
        padding: "7rem 3rem",
      }}
    >
      {props.isLogin && (
        <Box
          sx={{
            cursor: "pointer",
            "&:hover>#dividers": { width: "100%" },
            width: "max-content",
            height: "auto",
          }}
        >
          <Text style={{ paddingRight: "1.2rem" }}>manager</Text>
          <Divider
            style={transition}
            id="dividers"
            sx={{
              marginTop: "0.25rem",
              backgroundColor: "white",
              width: 0,
            }}
          />
        </Box>
      )}
    </Box>
  );
};
export default MoveHeader;
