"use client";
import { Fragment, useState } from "react";
import TextInput from "@/components/Shared/Inputs/TextInput";
import Link from "next/link";
import React from "react";
import Static from "../constants/Data/Static.json";
import { ISubcontractorSignUpTypes } from "@/types/types";
import GroupButtons from "@/components/Signup/GroupButtons";
import CustomSelect from "@/components/Shared/DropDown/CustomDropDown";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import { ToastError, ToastInfo, ToastWarning } from "@/components/Shared/Notify";
import { useRouter } from "next/navigation";
import { LogError } from "@/components/Shared/Log";
import Loader from "@/components/Shared/Loader";

const SignUp = () => {
  const router = useRouter()
  const { divisions } = Static;
  const [isSubcontractor, setSubcontractor] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ISubcontractorSignUpTypes>({
    firstName: "",
    lastName: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
    phone: "",
    companyName: "",
    state: "",
    county: "",
    csiDivision: "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputs.password.length < 8) {
      ToastWarning("Password should be greater then 8 characters");
      return;
    }
    if (inputs.password.toLowerCase().trim() !== inputs.confirmPassword.toLowerCase().trim()) {
      ToastWarning("Password not matched");
      return;
    }
    setLoading(true)
    const body = {
      firstName: inputs.firstName.toLowerCase(),
      lastName: inputs.lastName,
      companyEmail: inputs.companyEmail,
      password: inputs.password,
      phone: inputs.phone,
      companyName: inputs.companyName,
      state: inputs.state,
      county: inputs.county,
      csiDivision: isSubcontractor ? inputs.csiDivision : null,
      role: isSubcontractor ? "subContractor" : "generalContractor"
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/signup`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(body)
      });
      const jsonData = await response.json();
      setLoading(false)
      if (response.status === 201) {
        router.push("login")
      }
      else ToastInfo(jsonData?.message)
    } catch (error) {
      setLoading(false)
      LogError("SignUp", error);
      ToastError("Unable to SignUp")
    }
  };

  return (
    <Fragment>
      <div className="w-full h-screen">
        <Header />
        <div className="w-full h-[calc(100%-140px)] flex justify-center items-center md:px-0 px-4">
          <form
            onSubmit={handleSubmit}
            action=""
            className="md:w-[40%] w-full mx-auto h-[calc(100%-50px)] bg-white-main shadow-secondary px-4 py-6 rounded-[8px] overflow-auto HideScroll"
          >
            <GroupButtons
              state={isSubcontractor}
              eventListener={setSubcontractor}
            />
            <p className="font-semibold text-brand-tartary text-[18px] text-center my-6">
              Monthly Plan $30.00
            </p>
            <div className="w-full flex md:flex-row flex-col md:items-center items-start justify-center gap-4 my-6">
              <TextInput
                type="text"
                name="firstName"
                state={inputs.firstName}
                setState={handleInputs}
                title="First Name"
              />
              <TextInput
                type="text"
                name="lastName"
                state={inputs.lastName}
                setState={handleInputs}
                title="Last Name"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col md:items-center items-start justify-center gap-4 my-6">
              <TextInput
                type="email"
                name="companyEmail"
                state={inputs.companyEmail}
                setState={handleInputs}
                title="Email"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col md:items-center items-start justify-center gap-4 my-6">
              <TextInput
                type="text"
                name="companyName"
                state={inputs.companyName}
                setState={handleInputs}
                title="Company Name"
              />

              <TextInput
                type="text"
                name="phone"
                state={inputs.phone}
                setState={handleInputs}
                title="Company Phone"
              />
            </div>
            {
              isSubcontractor &&
              <div className="w-full flex items-center justify-center my-6">
                <CustomSelect
                  title="Choose CSI division for project availability:"
                  dropdownItems={divisions}
                  setSelectedOption={(
                    e: { value: string; label: string } | null
                  ) => setInputs({ ...inputs, csiDivision: e?.value })}
                />
              </div>
            }
            <div className="w-full flex md:flex-row flex-col md:items-center items-start justify-center gap-4 my-6">
              <TextInput
                type="text"
                name="state"
                state={inputs.state}
                setState={handleInputs}
                title="State"
              />
              <TextInput
                type="text"
                name="county"
                state={inputs.county}
                setState={handleInputs}
                title="County"
              />
            </div>

            <div className="w-full flex md:flex-row flex-col md:items-center items-start justify-center gap-4 my-6">
              <TextInput
                type="password"
                name="password"
                state={inputs.password}
                setState={handleInputs}
                title="Password"
              />
              <TextInput
                type="password"
                name="confirmPassword"
                state={inputs.confirmPassword}
                setState={handleInputs}
                title="Confirm Password"
              />
            </div>

            <div className="w-full h-[36px] mt-10">
              <button
                type="submit"
                className="h-full w-full flex items-center justify-center bg-success text-white-main text-[14px] font-[400] rounded-[8px]"
              >
                Confirm & Pay
              </button>
            </div>
            <div className="w-full flex items-center justify-center gap-2 mt-2">
              <p className="font-inter text-[14px] text-black-main">
                Already have an account?
              </p>
              <Link
                className="font-inter text-[14px] text-brand-tartary"
                href={"/login"}
              >
                Login
              </Link>
            </div>
          </form>
        </div>
        <Footer />
      </div>
      {loading && <Loader />}
    </Fragment>
  );
};

export default SignUp;
