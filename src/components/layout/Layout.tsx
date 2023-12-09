import React from "react";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="w-full"
      style={{
        height: "auto",
        minHeight: "100vh",
        padding: "100px 15px",
        position: "relative",
        boxSizing: "border-box",
        background: "black",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};
export default Layout;
