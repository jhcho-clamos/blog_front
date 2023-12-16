import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import { useRecoilValue } from "recoil";
import { loginSelector } from "@/recoil/login";
import Chat from "@/components/chat/Chat";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [mount, setMount] = useState<boolean>(false);
  const userInfo = useRecoilValue(loginSelector);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);
  if (!mount) return null;
  return (
    <div
      className="w-full flex-col"
      style={{
        height: "auto",
        minHeight: "100%",
        position: "relative",
        boxSizing: "border-box",
        background: "#101112",
        display: "flex",
        color: "white",
      }}
    >
      {userInfo?.isLogin && <Chat />}
      <Header />
      <div style={{ padding: "100px 20px", height: "100%" }}>{children}</div>
    </div>
  );
};
export default Layout;
