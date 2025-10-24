"use client";
import React from "react";
import Bag from "../../public/bag";
type WishatomsProps={
  count?:number;
};
export default function CartAtom(props:WishatomsProps) {
  const {count=0}=props
   const displayCount = count > 99 ? "99" : count.toString();
  return (
    <>
      <div className="h-[30px] w-[30px] relative inline-flex  justify-center items-center">
        <Bag/>
        <div className="text-[#ffffff] text-[.625rem] font-normal w-[15px] h-[15px] rounded-full flex justify-center items-center absolute left-1/2 bottom-1/2 bg-[#DC2626]">
          {displayCount}
        </div>
      </div>
    </>
  );
}
