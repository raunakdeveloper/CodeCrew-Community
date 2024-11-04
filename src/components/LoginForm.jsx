import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const initialData = { email: "", password: "" };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log(formData);
    setFormData(initialData);
    toast.success("Logged In");
    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 mt-6">
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-700 outline-none rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-[0_1px_0_rgba(255,255,255,0.5)]"
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password <sup className="text-pink-200">*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleChange}
            name="password"
            className="bg-richblack-700 outline-none rounded-[0.75rem] pr-12 w-full p-[12px] text-richblack-5 shadow-[0_1px_0_rgba(255,255,255,0.5)]"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[38px] cursor-pointer "
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <Link to="#">
            <p className="text-xs mt-2 text-blue-100 max-w-max ml-auto">
              Forgot Password
            </p>
          </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
