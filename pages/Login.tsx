"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import TextInput from "@/components/Shared/Inputs/TextInput";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Loader from "@/components/Shared/Loader";
import { LogError } from "@/components/Shared/Log";
import { ToastError, ToastInfo } from "@/components/Shared/Notify";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/login`, {
        method: 'POST', credentials: "include", headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(inputs)
      });
      const jsonData = await response.json();
      if (response.status === 200) {
        if (jsonData?.role === "subcontractor") router.push("/subcontractor")
        else router.push("/")
      }
      else ToastInfo(jsonData?.message)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      LogError("SignUp", error);
      ToastError("Unable to SignUp")
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="w-full h-[calc(100vh-140px)] flex items-center justify-center md:px-0 px-4">
        <form
          onSubmit={handleSubmit}
          action=""
          className="lg:w-[35%] md:w-[50%] w-full mx-auto flex flex-col gap-6 items-center justify-center bg-white-main shadow-secondary overflow-auto HideScroll px-4 py-6 rounded-[8px]"
        >
          <p className="font-inter font-semibold text-brand-tartary text-[24px]">
            Login
          </p>
          <p className="font-inter font-normal text-black-main/60 text-[16px]">
            Please login using your email and password.
          </p>
          <TextInput
            type="email"
            name="email"
            state={inputs.email}
            setState={handleInputs}
            title="Email"
            required
          />
          <TextInput
            type="password"
            name="password"
            state={inputs.password}
            setState={handleInputs}
            title="Password"
            required
          />
          <div className="w-full h-[36px] mt-4">
            <button
              type="submit"
              className="font-inter h-full w-full flex items-center justify-center bg-success text-white-main text-[14px] font-[400] rounded-[8px]"
            >
              Login
            </button>
          </div>
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center justify-start gap-2 mt-2">
              <p className="font-inter font-normal text-[14px] text-black-main">
                {`Don't Have an Account?`}
              </p>
              <Link
                className="font-inter font-medium text-[14px] text-brand-tartary"
                href={"/signup"}
              >
                Signup
              </Link>
            </div>
            <Link
              className="font-inter font-medium text-[14px] text-brand-secondary"
              href={"/forgetpassword"}
            >
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
      <Footer />
      {loading && <Loader />}
    </Fragment>
  );
};

export default Login;
