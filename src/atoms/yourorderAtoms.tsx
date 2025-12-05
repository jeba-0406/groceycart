import React from "react";
import fortune from "../../public/fortune.png";
import Image, { StaticImageData } from "next/image";
import { ButtonComponent } from "./buttonatoms";
type YourOrderAtomsprops = {
  path: StaticImageData;
};
export default function YourOrderAtoms({ path }: YourOrderAtomsprops) {
  const items = [1, 2, 3, 4];
  return (
    <div className="h-[34.9375rem] w-[21.625rem] border rounded-lg shadow-md">
      <span className="pl-[1.625rem] w-[9.375rem] h-[1.375rem] font-medium text-[20px] opacity-75">
        Your Order
      </span>
      <div className="w-full h-px bg-gray-300 my-3"></div>
      <div className="w-full flex justify-between px-6">
        <span className="text-[.9375rem]  opacity-75 font-medium ">
          Product
        </span>
        <span className="text-[#000000] text-[.9375rem] opacity-75 font-bold">
          Subtotal
        </span>
      </div>
      <div className="w-full h-px bg-gray-300 my-3"></div>
      <div className=" h-[370px] flex flex-col justify-evenly items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="w-[327px] h-[4rem] flex justify-evenly items-center "
          >
            <Image src={path} alt="img" width={64} height={64} />
            <div>
              <p className="text-[14px] font-medium opacity-75">
                Fortune Sunlite Refi...
              </p>
              <p className="text-[1rem] font-medium opacity-75">Qty : 1</p>
            </div>
            <p className="text-[16px] font-normal">Rs 99</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
      <ButtonComponent
        name={"Checkout"}
        classname={
          "bg-[#02B290] h-[3.0625rem] w-[18.625rem] text-white text-[1rem] font-bold rounded-md flex items-center justify-center"
        }
      />
      </div>
    </div>
  );
}
