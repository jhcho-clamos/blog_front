import styled from "@emotion/styled";
import React from "react";

interface TextStyleProps {
  color?: string;
  size?: string;
  weight?: string;
}

interface TextProps extends TextStyleProps {
  children?: React.ReactNode | React.ReactNode;
  placeholder?: string;
  className?: string;
  style?: {
    [name: string]: string;
  };
}

const TextComponent = styled("span")<TextStyleProps>`
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.weight || "400"};
  font-family: "NotoSans";
  font-size: ${(props) => props.size || "1rem"};
`;

const Text = (props: TextProps) => {
  return <TextComponent {...props}>{props.children}</TextComponent>;
};
export default Text;
