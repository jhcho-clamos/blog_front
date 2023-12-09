"use client";
import { RecoilRoot } from "recoil";
import Header from "@/components/header/Header";
import Layout from "@/components/layout/Layout";
import React from "react";

interface RecoilProps {
  children: React.ReactNode | React.ReactNode;
}
const RecoilRootProvider = ({ children }: RecoilProps) => {
  return (
    <RecoilRoot>
      <Header />
      <Layout>{children}</Layout>
    </RecoilRoot>
  );
};
export default RecoilRootProvider;
