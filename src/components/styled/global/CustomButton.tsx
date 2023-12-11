"use client";
import styled from "@emotion/styled";
import React from "react";

interface ButtonStyleProps {
  bgColor?: string;
  hoverColor?: string;
  padding?: string;
}

interface CustomButtonProps extends ButtonStyleProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick?: () => void;
}

const Button = styled("button")<ButtonStyleProps>`
  flex-grow: 1;
  height: min-content;
  background-color: ${(props) => props.bgColor || "transparent"};
  padding: ${(props) => props.padding || "10px"};
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.hoverColor || "transparent"};
  }
`;

const CustomButton = (props: CustomButtonProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
