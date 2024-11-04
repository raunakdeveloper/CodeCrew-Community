import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const initialData = {
    firstname: "",
    lastname: "",
    email: "",
    createpassword: "",
    confirmPassword: "",
    role: "student",
  };

  const [formData, setFormData] = useState(initialData);
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.createpassword !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setIsLoggedIn(true);
    console.log(formData);
    setFormData(initialData);
    toast.success("Account Created");
    navigate("/dashboard");
  };

  return (
    <div className="w-full">
      {/* Role Selection Buttons */}
      <div className="flex bg-richblack-700 p-1 gap-x-1 rounded-full max-w-max mt-6">
        <button
          type="button"
          onClick={() => setFormData({ ...formData, role: "student" })}
          className={`${
            formData.role === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => setFormData({ ...formData, role: "admin" })}
          className={`${
            formData.role === "admin"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all`}
        >
          Admin
        </button>
      </div>

      {/* Signup Form */}
      <form onSubmit={submitHandler} className="flex flex-col gap-y-4 mt-6">
        {/* First Name and Last Name */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={changeHandler}
              required
              className="bg-richblack-700 outline-none rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-[0_1px_0_rgba(255,255,255,0.5)]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={changeHandler}
              required
              className="bg-richblack-700 outline-none rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-[0_1px_0_rgba(255,255,255,0.5)]"
            />
          </label>
        </div>

        {/* Email */}
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={changeHandler}
            required
            className="bg-richblack-700 outline-none rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-[0_1px_0_rgba(255,255,255,0.5)]"
          />
        </label>

        {/* Create Password and Confirm Password */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              id="createpassword"
              type={showCreatePassword ? "text" : "password"}
              name="createpassword"
              placeholder="Create Password"
              onChange={changeHandler}
              required
              className="bg-richblack-700 outline-none rounded-[0.5rem] pr-12 text-richblack-5 w-full p-[12px] shadow-[0_1px_0_rgba(255,255,255,0.5)]"
            />
            <span
              onClick={() => setShowCreatePassword(!showCreatePassword)}
              className="absolute right-4 top-[38px] cursor-pointer"
            >
              {showCreatePassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              required
              className="bg-richblack-700 outline-none rounded-[0.5rem] pr-12 text-richblack-5 w-full p-[12px] shadow-[0_1px_0_rgba(255,255,255,0.5)]"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-[38px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
