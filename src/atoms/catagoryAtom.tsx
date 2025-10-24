import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type CatagoryAtomProps={
  path:StaticImageData;
  name:String;

}
export const CatagoryAtom = ({path,name}:CatagoryAtomProps) => {
  return (
    <>
      <div className="flex flex-col w-[6.375rem] justify-center items-center">
        <div className="w-[6.375rem] h-[6.375rem] rounded-[.3125rem]  flex justify-center items-center border-[.0625rem] shadow-lg">
          <Image
            src={path}
            alt="fruits"
            width={60} 
            height={60}
            className="object-contain"
          />
        </div>
        <div className="w-[4.75rem] h-[2.75rem] text-[.875rem] text-center pt-[9px]">
          <p>Fruits & Vegetables</p>
        </div>
      </div>
    </>
  );
};
