import React from "react";
import LoginForm from "./login.form";
import { Row } from "antd";
import "./login.style.less";

const Login = () => {
  return (
    <div>
      <Row>
        <LoginForm />
      </Row>
    </div>
  );
};

export default Login;
