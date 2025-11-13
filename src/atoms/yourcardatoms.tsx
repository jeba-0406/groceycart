import Image, { StaticImageData } from "next/image";
import React from "react";
import { QuantityAtom } from "@/atoms/quantity";
import { CrossIcon } from "../../public/cross";
type YourCardAtomsprops = {
  path: StaticImageData;
  name: String;
  Brand: String;
  Quantity: String;
  price: String;
  discount: String;
  discountPrice: String;
};
export const YourCardAtoms = ({
  path,
  name,
  Brand,
  Quantity,
  price,
  discount,
  discountPrice,
}: YourCardAtomsprops) => {
  return (
    <div className="w-[48.8125rem] h-[7.875rem] shadow-xl flex justify-between">
      <div className="flex">
        <Image src={path} alt="img" />
        <div>
          <div className="flex flex-col justify-between h-[126px] py-2 pl-5 ">
            <p className="text-[.875rem] font-light">{Brand}</p>
            <p className="font-extrabold">{name}</p>
            <div className="flex justify-between">
              <QuantityAtom count={Number(Quantity)} />
              <p className="text-[#CB0000] font-medium">Rs{price}</p>
              <p className="text-[#A4A4A4] font-medium text-base line-through decoration-2 decoration-gray-400">
                Rs{discountPrice}
              </p>
              <p className="text-[#02B290] text-[1rem] font-bold">
                {discount}% OFF
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="pr-5 pt-4">
        <CrossIcon />
      </span>
    </div>
  );
};
