import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frame from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row w-11/12 max-w-[1200px] py-12 mx-auto gap-y-8 md:gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 max-w-[450px] mx-auto text-white">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-5 font-medium leading-[1.375rem]">
            OR
          </p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button
          className="w-full flex items-center justify-center rounded-lg font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px] mx-auto mt-6 md:mt-0">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
