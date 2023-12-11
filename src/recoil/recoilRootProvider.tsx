"use client";
import { RecoilRoot } from "recoil";
import Header from "@/components/header/Header";
import Layout from "@/components/layout/Layout";
import React from "react";
import { Toaster } from "react-hot-toast";

interface RecoilProps {
  children: React.ReactNode | React.ReactNode;
}
const RecoilRootProvider = ({ children }: RecoilProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Toaster />
        {children}
      </Layout>
    </RecoilRoot>
  );
};
export default RecoilRootProvider;
