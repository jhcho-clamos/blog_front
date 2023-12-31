import "./globals.css";
import React, { Suspense } from "react";
import Progress from "@/components/Progress/Progress";
import RecoilRootProvider from "@/recoil/recoilRootProvider";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

interface RootProps {
  children: React.ReactNode | React.ReactNode[];
}

const RootLayout = ({ children }: RootProps) => {
  return (
    <html lang="en">
      <head>
        <title>dev_blog</title>
      </head>
      <body>
        <Suspense fallback={<Progress />}>
          <RecoilRootProvider children={children} />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
