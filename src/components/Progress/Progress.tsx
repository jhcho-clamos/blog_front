"use client";
import Image from "next/image";
import Styles from "@/css/loading.module.css";
const Progress = () => {
  return (
    <div className={Styles.loading}>
      <Image
        width={200}
        height={200}
        src={"/assets/img/loading.svg"}
        alt="loading"
      />
    </div>
  );
};
export default Progress;
