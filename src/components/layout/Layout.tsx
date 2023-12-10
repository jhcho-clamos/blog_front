import React from "react";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className="w-full flex-col"
      style={{
        height: "auto",
        minHeight: "100vh",
        position: "relative",
        boxSizing: "border-box",
        background: "#101112",
        padding: "100px 20px",
        display: "flex",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};
export default Layout;
