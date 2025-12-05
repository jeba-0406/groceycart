"use client";
import React from "react";
import { ButtonComponent } from "./buttonatoms";
import { ButtonAtom } from "./button";
import { Input } from "@heroui/react";
import FullnameInput from "./inputFieldAtoms";

export default function ChagePasswordAtoms() {
  return (
    <div className="w-[43.0625rem] h-[21rem] border rounded-xl border-[#000000]">
      <div>
        <div className="flex justify-between items-center pl-5 pr-8 h-[94px]">
          <div>
            <span className="text-[20px]  opacity-75 font-medium">
              Change Password
            </span>
            <p className="text-[15px] font-medium opacity-60 ">
              Update Your Password{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 my-3"></div>
        <div className="grid grid-cols-2 gap-4 w-full px-5">
          <FullnameInput label={"Old Password"}/>
          <FullnameInput label={"New Password"} />
          <div className="col-span-2">
            <FullnameInput label={"Confirm Password"} />
          </div>
        </div>
        <div className="pt-5 pl-5">
          <ButtonComponent
            name={"Change Password"}
            classname={
              "bg-[#02B290] h-[3.0625rem] w-[18.625rem] text-white text-[1rem] font-bold rounded-md flex items-center justify-center"
            }
          />
        </div>
      </div>
    </div>
  );
}
