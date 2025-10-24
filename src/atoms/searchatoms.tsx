"use client"
import {Search} from '@/atoms/search'
export  function SearchComponent() {
  return (
    <div className="w-[43.9375rem] h-[3.125rem] bg-[#F6F6F6] border border-[#E6E6E6] rounded-[.3125rem] flex justify-between items-center px-[1.875rem]">
     <input  placeholder="Search for products..." type="text" className=" text-[1rem] w-[75%] h-[3rem] bg-transparent border-[#E6E6E6] border-0 m-0 p-0 outline-none border-none bg-transparent box-content focus:ring-0 focus:outline-none"/>      
    <Search/>
    </div>
    
  );
}
