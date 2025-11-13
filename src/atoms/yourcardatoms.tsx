
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import {QuantityAtom } from '@/atoms/quantity'
type YourCardAtomsprops={
    path:StaticImageData;
    name:String;
    Brand:String;
    Quantity:String;
    price:String;
    discount:String;
    discountPrice:String;   
}
export const YourCardAtoms = ({path,name,Brand,Quantity,price,discount,discountPrice}:YourCardAtomsprops) => {
  return (
    <div className='w-[48.8125rem] h-[7.875rem] bg-[#282828] flex'>
        <Image
        src={path}
        alt="img"
        />
        <div>
            {Brand}
            {name}
            <div>
                <QuantityAtom min={Quantity}/>
            </div>
        </div>
    </div>
  )
}
