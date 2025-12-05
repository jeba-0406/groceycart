import React from 'react'
import {ButtonAtom} from "@/atoms/button"
import {ButtonComponent} from "@/atoms/buttonatoms"

export default function CardTotal() {
  return (
    <div>
        <div className='w-[21.875rem] h-[18.875rem] rounded-[.625rem] flex flex-col  border border-[#E6E6E6] justify-evenly'>
            <span className='pl-[1.625rem] w-[9.375rem] h-[1.375rem] font-medium text-[20px] opacity-75'>Card Totals</span>
            <div className="w-full h-px bg-gray-300 my-3"></div>
            <div className='w-full flex justify-between px-6'> 
                <span className='text-[.9375rem]  opacity-75 font-medium '>Subtotal</span>
                <span className='text-[#CB0000] text-[.9375rem] opacity-75 font-bold'>Rs 2,133</span>
            </div>
            <div className='w-full flex justify-between px-6'> 
                <span className='text-[.9375rem]  opacity-75 font-medium '>Shipping</span>
                <span className='text-[#000000] text-[.9375rem] opacity-75 font-bold'>Free</span>
            </div>
            <div className='w-full flex justify-between px-6'> 
                <span className='text-[.9375rem]  opacity-75 font-medium '>Estimated for</span>
                <span className='text-[#000000] text-[.9375rem] opacity-75 font-bold '>India</span>
            </div>
            <div className='w-full flex justify-between px-6'> 
                <span className='text-[.9375rem]  opacity-75 font-medium '>Total</span>
                <span className='text-[#CB0000] text-[.9375rem] opacity-75 font-bold'>Rs 2,133</span>
            </div>
            <div className='w-full flex justify-center'>
            <ButtonComponent name={"NEXT"} classname={"bg-[#02B290] h-[3.0625rem] w-[18.625rem] text-white text-[1rem] font-bold rounded-md flex items-center justify-center"}/>
            </div>
        </div>
    </div>
  )
}
