import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { ButtonAtom } from './button';
type ProductAtomsProps={
    path:StaticImageData;
    name:String;
    price:String;
    discountPrice:String;
}
export const ProductAtoms = ({path,name,price,discountPrice}:ProductAtomsProps) => {
  return (
    <>
    <div className='w-[12.4375rem] h-[22.5625rem]  flex flex-col justify-between items-center pb-[20px] pt-[20px] shadow-lg rounded-[.375rem]'>
        <Image
        src={path}
        alt='img'
        />
        <p className='font-bold text-[#000000]'>{name}</p>
        <div className='flex justify-between w-[170px]'>
            <p className='text-[14px] font-bold text-[#CB0000]'>Rs{price}</p>
            <p className='text-[14px] font-bold text-[#A4A4A4] line-through decoration-2'>Rs{discountPrice}</p>
        </div>
        <ButtonAtom/>
    </div>
    </>
  )
}
