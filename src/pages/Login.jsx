import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/loginImg.webp";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="login"
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
