"use client";
import Styles from "@/css/login.module.css";

const Login = () => {
  return (
    <div className={Styles.login_from}>
      <div className="flex flex-grow">
        <div className="flex flex-grow flex-col">
          <input className={Styles.input_box} type="text" />
          <input className={Styles.input_box} type="text" />
        </div>
      </div>
    </div>
  );
};
export default Login;
