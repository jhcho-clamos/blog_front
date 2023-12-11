"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import Text from "@/components/styled/global/Text";
import theme from "@/setting/theme";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface InputStyleProps {
  color?: string;
  bgColor?: string;
  outline?: string;
}

interface InputProps extends InputStyleProps {
  onChange: (e: any) => void;
  value: any;
  setValue?: (e: any) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  title?: string;
  password?: boolean;
  onKeyDown?: (e: any) => void;
}

const InputBox = styled("input")<InputStyleProps>`
  &:focus::placeholder {
    color: transparent;
  }
  &:focus {
    outline: 2px solid ${(props) => props.outline || theme.blue.base};
  }
  border-radius: 5px;
  padding: 1.4rem 3.2rem;
  box-sizing: border-box;
  color: ${(props) => props.color || "black"};
  outline: none;
  border: none;
`;

const Input = forwardRef((props: InputProps, ref: any) => {
  const [isPw, setIsPw] = useState<boolean>(props.password || false);

  // useImperativeHandle(ref, () => ({
  //   currentFocus,
  // }));

  return (
    <Box flexGrow={1}>
      {props.title && (
        <Box flexGrow={1} className="flex flex-col">
          <Box flexGrow={1} className="flex flex-row">
            <Text size="1.5rem" color="red">
              *
            </Text>
            <Text size="1.2rem">{props.title}</Text>
          </Box>
        </Box>
      )}
      <Box
        position="relative"
        className="flex flex-col items-center justify-center"
      >
        {props.icon && (
          <Box position="absolute" sx={{ left: "1rem", zIndex: 10 }}>
            {props.icon}
          </Box>
        )}
        <InputBox
          ref={ref != null ? ref : null}
          type={isPw ? "password" : "input"}
          {...props}
        />
        {props.password && (
          <Box
            position="absolute"
            sx={{ right: "1rem", zIndex: 10, cursor: "pointer" }}
            onClick={() => setIsPw(!isPw)}
          >
            {isPw ? (
              <VisibilityIcon
                sx={{ color: "black", width: "1.7rem", height: "1.7rem" }}
              />
            ) : (
              <VisibilityOffIcon
                sx={{ color: "black", width: "1.7rem", height: "1.7rem" }}
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default Input;
