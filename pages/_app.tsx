import React from "react";
import { AppProps } from "next/app";

const _App = ({ Component }: AppProps) => {
  return (
    <>
      <h1>_app</h1>
      <Component />
    </>
  );
};

export default _App;
