"use client";
import { Input } from "@heroui/react";
import React, { useState } from "react";
type FullnameInputprops={
  label?:String;
}

export default function FullnameInput({label="Full Name"}:FullnameInputprops) {
  const [value, setValue] = useState(""); // default value

  return (
    <Input
      label={label}
      labelPlacement="outside"
      variant="bordered"
      radius="lg"
      size="lg"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-[300px]"
      classNames={{
        inputWrapper:
          "h-[50px] bg-[#EAF2FF] border rounded-md border-gray-300 shadow-none " +
          "!hover:border-gray-300 !focus:border-gray-300",

        input:
          "opacity-80 font-medium text-[14px] bg-transparent outline-none",

        label: value.length > 0 
          ? "opacity-0 pointer-events-none" 
          : "pl-2 text-sm font-medium opacity-60",
      }}
    />
  );
}
