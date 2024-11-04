import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signupImg.webp"

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Join CodeCrew to Build and Grow Your Skills"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="signup"
        image={signupImg}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Signup;
