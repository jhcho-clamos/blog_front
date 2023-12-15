import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);
  if (!mount) return null;
  return (
    <div
      className="w-full flex-col"
      style={{
        height: "100vh",
        position: "relative",
        boxSizing: "border-box",
        background: "#101112",
        display: "flex",
        color: "white",
      }}
    >
      <Header />
      <div style={{ padding: "100px 20px", height: "100%" }}>{children}</div>
    </div>
  );
};
export default Layout;
